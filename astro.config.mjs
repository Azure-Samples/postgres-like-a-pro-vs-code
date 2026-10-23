// @ts-check
import { defineConfig } from 'astro/config';

// Served by GitHub Pages at https://azure-samples.github.io/postgres-like-a-pro-vs-code/.
// SITE_URL / SITE_BASE override `site` and `base` at build time. The deploy workflow sets both from
// actions/configure-pages, so forks, custom domains, and private Pages domains get the right paths.
export default defineConfig({
  site: process.env.SITE_URL || 'https://azure-samples.github.io',
  base: process.env.SITE_BASE || '/postgres-like-a-pro-vs-code',
  output: 'static',
  trailingSlash: 'ignore',
  // Inline the CSS in the page, so first paint doesn't wait on a stylesheet request (one page, ~10 KB).
  build: { inlineStylesheets: 'always' },
});
