# Sleepless Docs

Official documentation for Sleepless FiveM resources.

This is a Next.js app generated with [Create Fumadocs](https://github.com/fuma-nama/fumadocs), using [static export](https://nextjs.org/docs/app/guides/static-exports) for GitHub Pages.

## Development

```bash
bun install
bun run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
bun run build
bun run start   # serves the static `out/` directory
```

## Project layout

| Path | Description |
| --- | --- |
| `content/docs` | MDX documentation content |
| `app/(home)` | Landing page |
| `app/docs` | Documentation layout and pages |
| `app/api/search` | Static search index route |
| `lib/source.ts` | Fumadocs content source adapter |
| `lib/layout.shared.tsx` | Shared layout options (nav, links) |
| `components` | Shared UI / MDX helpers |

## Content

Edit files under `content/docs`. Sidebar order is controlled by `meta.json` files in each folder.
