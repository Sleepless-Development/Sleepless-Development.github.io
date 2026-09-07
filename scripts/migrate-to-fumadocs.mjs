import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const PAGES = path.join(ROOT, "pages");
const OUT = path.join(ROOT, "content", "docs");

/** @type {Record<string, string>} */
const RESOURCE_TITLES = {
  index: "Introduction",
  interact: "Interact",
  lootbox: "Lootbox",
  pedmanager: "Ped Manager",
  waypoints: "Waypoints",
  inventoryaddons: "Inventory Addons",
  crafting: "Crafting",
  mining: "Mining",
  woodcutting: "Woodcutting",
  salvaging: "Salvaging",
  skills: "Skills",
};

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function listFiles(dir) {
  /** @type {string[]} */
  const results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === "components" || entry.name === "_app.mdx") continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) results.push(...listFiles(full));
    else results.push(full);
  }
  return results;
}

/**
 * Convert Nextra _meta.json object into Fumadocs meta pages list.
 * @param {Record<string, unknown>} meta
 */
function convertMeta(meta) {
  /** @type {string[]} */
  const pages = [];

  for (const [key, value] of Object.entries(meta)) {
    if (key === "index") {
      pages.push("index");
      continue;
    }

    if (typeof value === "object" && value && "type" in value && value.type === "separator") {
      const title = /** @type {{ title?: string }} */ (value).title || key.replace(/^---+/, "");
      pages.push(`---${title}---`);
      continue;
    }

    if (typeof value === "object" && value && "href" in value) {
      const item = /** @type {{ title?: string; href: string }} */ (value);
      const title = (item.title || key).replace(/\s*↗\s*$/, "").trim();
      pages.push(`[${title}](${item.href})`);
      continue;
    }

    pages.push(key);
  }

  return pages;
}

/**
 * @param {string} content
 * @param {string | undefined} forcedTitle
 */
function transformMdx(content, forcedTitle) {
  let text = content.replace(/\r\n/g, "\n");

  // Strip Nextra component imports
  text = text.replace(/^import\s+\{[^}]+\}\s+from\s+['"]nextra(?:\/components)?['"];?\s*\n/gm, "");
  text = text.replace(/^import\s+\{[^}]+\}\s+from\s+['"]nextra-theme-docs['"];?\s*\n/gm, "");

  // Rewrite component import paths
  text = text.replace(
    /from\s+['"]@components\/([^'"]+)['"]/g,
    'from "@/components/$1"',
  );

  // Drop unused Tabs/Tab/Steps imports that may remain if mixed; keep ResourceLinks imports
  // (already rewritten above)

  // Convert Callout tip -> info (Fumadocs uses info/warn/error/success)
  text = text.replace(/<Callout\s+type=["']tip["']/g, '<Callout type="info"');
  text = text.replace(/<Callout\s+type=["']warning["']/g, '<Callout type="warn"');

  // Shiki has no `cfg` grammar — treat server.cfg snippets as bash
  text = text.replace(/```cfg/g, "```bash");

  // Convert Nextra Steps wrapper to remark-steps markers
  if (text.includes("<Steps>") || text.includes("</Steps>")) {
    text = text.replace(/<Steps>\s*/g, "");
    text = text.replace(/\s*<\/Steps>/g, "");
    // Mark ### headings that were inside Steps as steps
    // Heuristic: after removing Steps, mark consecutive ### until blank line before ## or end section
    // Safer: mark any ### immediately after "## Installation" style sections by converting all ### in files that had Steps
    text = text.replace(/^(### .+)$/gm, (match) => {
      if (match.includes("[step]")) return match;
      return `${match} [step]`;
    });
  }

  // Internal absolute links: /foo -> /docs/foo (skip external)
  text = text.replace(/\]\((\/(?!docs\/|static\/|favicon)[^)]+)\)/g, "](/docs$1)");
  text = text.replace(/link=["'](\/(?!docs\/|static\/|favicon)[^"']+)["']/g, 'link="/docs$1"');
  text = text.replace(/href=["'](\/(?!docs\/|static\/|favicon)[^"']+)["']/g, 'href="/docs$1"');

  // Prefer the page H1 for the document title; fall back to meta labels
  const h1 = text.match(/^#\s+(.+)\s*$/m);
  let title = h1 ? h1[1].trim() : forcedTitle;
  if (h1) {
    // Remove H1 — Fumadocs DocsTitle renders frontmatter title
    text = text.replace(h1[0], "").replace(/^\n+/, "");
  }

  if (!title) title = "Untitled";

  // Avoid double frontmatter
  if (!text.startsWith("---")) {
    text = `---\ntitle: ${JSON.stringify(title)}\n---\n\n${text.trimStart()}`;
  }

  // Clean extra blank lines at top after frontmatter
  text = text.replace(/^(---\n[\s\S]*?\n---)\n+/, "$1\n\n");

  return text;
}

/**
 * Build title map from a meta object for child pages.
 * @param {Record<string, unknown>} meta
 */
function titleMapFromMeta(meta) {
  /** @type {Record<string, string>} */
  const map = {};
  for (const [key, value] of Object.entries(meta)) {
    if (typeof value === "string") map[key] = value;
  }
  return map;
}

function migrate() {
  if (!fs.existsSync(PAGES)) {
    console.error("pages/ not found");
    process.exit(1);
  }

  if (fs.existsSync(OUT)) {
    fs.rmSync(OUT, { recursive: true, force: true });
  }
  ensureDir(OUT);

  // Collect sibling mdx files that pair with directories
  const topEntries = fs.readdirSync(PAGES, { withFileTypes: true });
  const dirNames = new Set(
    topEntries.filter((e) => e.isDirectory() && e.name !== "components").map((e) => e.name),
  );

  // Root meta
  const rootMetaPath = path.join(PAGES, "_meta.json");
  const rootMeta = JSON.parse(fs.readFileSync(rootMetaPath, "utf8"));
  const rootPages = convertMeta(rootMeta).filter((p) => p !== "index" || true);
  // Ensure index first
  const ordered = ["index", ...rootPages.filter((p) => p !== "index")];
  fs.writeFileSync(
    path.join(OUT, "meta.json"),
    JSON.stringify({ pages: ordered }, null, 2) + "\n",
  );

  const rootTitleMap = titleMapFromMeta(rootMeta);

  // Process root-level MDX
  for (const entry of topEntries) {
    if (!entry.isFile() || !entry.name.endsWith(".mdx")) continue;
    if (entry.name.startsWith("_")) continue;

    const base = entry.name.replace(/\.mdx$/, "");
    const src = path.join(PAGES, entry.name);
    const content = fs.readFileSync(src, "utf8");
    const title =
      rootTitleMap[base] ||
      RESOURCE_TITLES[base] ||
      base;

    if (dirNames.has(base)) {
      // folder page becomes index.mdx inside folder
      const destDir = path.join(OUT, base);
      ensureDir(destDir);
      fs.writeFileSync(path.join(destDir, "index.mdx"), transformMdx(content, title));
    } else {
      fs.writeFileSync(path.join(OUT, entry.name), transformMdx(content, title));
    }
  }

  // Process directories recursively
  /**
   * @param {string} relDir relative from pages/
   */
  function processDir(relDir) {
    const srcDir = path.join(PAGES, relDir);
    const destDir = path.join(OUT, relDir);
    ensureDir(destDir);

    const entries = fs.readdirSync(srcDir, { withFileTypes: true });
    const nestedDirs = new Set(
      entries.filter((e) => e.isDirectory()).map((e) => e.name),
    );

    const metaPath = path.join(srcDir, "_meta.json");
    /** @type {Record<string, string>} */
    let titles = {};
    if (fs.existsSync(metaPath)) {
      const meta = JSON.parse(fs.readFileSync(metaPath, "utf8"));
      titles = titleMapFromMeta(meta);
      const pages = convertMeta(meta);
      // If this folder has an index from parent mdx, keep index first if present on disk later
      const hasParentIndex = fs.existsSync(path.join(destDir, "index.mdx"));
      const pageList = hasParentIndex
        ? ["index", ...pages.filter((p) => p !== "index")]
        : pages;
      fs.writeFileSync(
        path.join(destDir, "meta.json"),
        JSON.stringify(
          {
            title: RESOURCE_TITLES[path.basename(relDir)] || titles[path.basename(relDir)],
            pages: pageList,
          },
          null,
          2,
        ) + "\n",
      );
    }

    for (const entry of entries) {
      if (entry.name.startsWith("_")) continue;

      if (entry.isDirectory()) {
        processDir(path.join(relDir, entry.name));
        continue;
      }

      if (!entry.name.endsWith(".mdx")) continue;

      const base = entry.name.replace(/\.mdx$/, "");
      const src = path.join(srcDir, entry.name);
      const content = fs.readFileSync(src, "utf8");
      const title = titles[base] || base;

      if (nestedDirs.has(base)) {
        const nested = path.join(destDir, base);
        ensureDir(nested);
        fs.writeFileSync(path.join(nested, "index.mdx"), transformMdx(content, title));
      } else {
        fs.writeFileSync(path.join(destDir, entry.name), transformMdx(content, title));
      }
    }
  }

  for (const name of dirNames) {
    processDir(name);
  }

  console.log("Migrated content to content/docs");
}

migrate();
