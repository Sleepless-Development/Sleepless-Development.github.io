import fs from "node:fs/promises";
import path from "node:path";

const outDir = path.resolve(process.argv[2] || "out");

async function walk(dir, files) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) await walk(fullPath, files);
    else files.push(fullPath);
  }
}

function flatTarget(filePath) {
  const parts = path.relative(outDir, filePath).split(path.sep);
  const index = parts.findIndex((part) => part.startsWith("__next."));
  if (index < 0 || index === parts.length - 1) return null;
  return path.join(outDir, ...parts.slice(0, index), parts.slice(index).join("."));
}

const files = [];
await walk(outDir, files);

let copied = 0;
for (const filePath of files) {
  const target = flatTarget(filePath);
  if (!target) continue;
  await fs.mkdir(path.dirname(target), { recursive: true });
  try {
    await fs.copyFile(filePath, target, fs.constants.COPYFILE_EXCL);
    copied += 1;
  } catch (error) {
    if (error.code !== "EEXIST") throw error;
  }
}

console.log(`rsc aliases: ${copied}`);
