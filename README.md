# Polyhymnia

The ear-training app: Vite, React 19, TypeScript, Tailwind CSS v4, shadcn/ui and TanStack Router. Notation, theory and sound come from the published `@polyhymnia/*` packages.

```sh
pnpm install
pnpm dev
pnpm typecheck
pnpm test
pnpm build
```

To develop against local checkouts of the packages, clone `notation`, `music-theory` and `web-audio` next to this repo (or set `POLYHYMNIA_SRC` to their parent directory) and run `pnpm dev:link`; `pnpm dev:unlink` returns to the npm versions.

MIT licensed.
