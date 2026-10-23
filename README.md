# PostgreSQL Like a Pro: VS Code Edition

The landing page for the **PostgreSQL Like a Pro: VS Code Edition** video series. It gets viewers from "I watched the series" to "it's running in my editor" in one page.

From the page, viewers can:

- **Install** the free [PostgreSQL extension for VS Code](https://marketplace.visualstudio.com/items?itemName=ms-ossdata.vscode-pgsql)
- **See what it does**: connect and explore, schema-aware IntelliSense, `@pgsql` in Copilot Chat, and Agent mode
- **Build a research agent** backed by PostgreSQL on Azure, step by step, with [postgres-agents](https://github.com/Azure-Samples/postgres-agents)
- **Keep going** with Microsoft Learn, the [PostgreSQL Hub](https://azure-samples.github.io/postgres-hub/), the YouTube series, and the VS Code ebook

The site is a static [Astro](https://astro.build) site, deployed to GitHub Pages.

## Getting started

You need **Node.js 22.12 or later**. CI builds with Node 24.

```bash
npm ci
npm run dev        # http://localhost:4321/postgres-like-a-pro-vs-code
```

| Command           | What it does                                   |
| ----------------- | ---------------------------------------------- |
| `npm run dev`     | Starts the dev server                          |
| `npm run check`   | Type-checks `.astro` and `.ts` files           |
| `npm run build`   | Builds the static site into `dist/`            |
| `npm run preview` | Serves the production build locally            |

## Where to change things

| To change…                                     | Edit                                                                 |
| ---------------------------------------------- | -------------------------------------------------------------------- |
| Page text, links, and CTAs                     | [`src/content/copy.ts`](src/content/copy.ts)                         |
| The page title and meta description            | `meta` in [`src/content/copy.ts`](src/content/copy.ts)               |
| A page section (hero, capabilities, etc.)      | [`src/components/`](src/components/)                                 |
| Section order                                  | [`src/components/LandingPage.astro`](src/components/LandingPage.astro) |
| Colors, spacing, and type (design tokens)      | [`src/styles/tokens.css`](src/styles/tokens.css)                     |
| Global styles                                  | [`src/styles/global.css`](src/styles/global.css)                     |
| `<head>`, favicon links, and theme bootstrap   | [`src/layouts/Base.astro`](src/layouts/Base.astro)                   |
| Partner logos and Azure service icons          | The files in [`src/assets/`](src/assets/), wired up in [`src/content/copy.ts`](src/content/copy.ts) |
| UI icons ([Tabler](https://tabler.io/icons))   | The icon list in [`src/lib/icons.ts`](src/lib/icons.ts)              |
| The demo video                                 | The files in [`public/media/`](public/media/), referenced in [`src/components/DemoVideo.astro`](src/components/DemoVideo.astro) |
| Favicons                                       | The files in [`public/`](public/), referenced in [`src/layouts/Base.astro`](src/layouts/Base.astro) |
| The site URL and base path                     | [`astro.config.mjs`](astro.config.mjs), or `SITE_URL` / `SITE_BASE` at build time |

If you rename a file in `public/`, update the component that references it too.

### Writing copy

Keep page text in `copy.ts` and not in the components. In copy strings:

- `` `backticks` `` render as `<code>`.
- `\n` is a line break.
- An href written as a `{{placeholder}}` marks a link that isn't published yet. Its text still shows, but it doesn't render as a link until you replace the placeholder with a real URL. For example, `href: '{{learn_url}}'`.

## Deployment

Every push to `main` runs [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml). The workflow runs `astro check`, builds the site, and publishes to GitHub Pages. You can also trigger it by hand with **workflow_dispatch**.

### Deploy your own copy

To publish a fork on GitHub Pages:

1. In your fork, go to **Settings → Pages** and set **Source** to **GitHub Actions**.
2. Set `SITE_URL` and `SITE_BASE` to your fork's Pages URL and path, for example `https://<your-username>.github.io` and `/<your-repo-name>`. You can add them to the `env` block in [`deploy.yml`](.github/workflows/deploy.yml), or change the defaults in [`astro.config.mjs`](astro.config.mjs).
3. Push to `main`, or run the workflow by hand.

`SITE_BASE` also changes the local dev URL to `http://localhost:4321/<base>`.

## Contributing

This project welcomes contributions and suggestions. See [CONTRIBUTING.md](CONTRIBUTING.md) and the [Code of Conduct](.github/CODE_OF_CONDUCT.md).

To report a bug or request a feature in the **extension itself**, use [microsoft/vscode-pgsql](https://github.com/microsoft/vscode-pgsql).

## Trademarks

This project may contain trademarks or logos for projects, products, or services. Authorized use of Microsoft trademarks or logos must follow [Microsoft's Trademark & Brand Guidelines](https://www.microsoft.com/legal/intellectualproperty/trademarks/usage/general). Use of Microsoft trademarks or logos in modified versions of this project must not cause confusion or imply Microsoft sponsorship. Any use of third-party trademarks or logos is subject to those third parties' policies.

## License

[MIT](LICENSE.md)
