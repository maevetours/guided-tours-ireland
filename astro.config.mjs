import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://guidedtourstoireland.github.io',
  integrations: [
    mdx(),
    sitemap(),
    tailwind()
  ],
  output: 'static',
  build: {
    inlineStylesheets: 'auto'
  },
  markdown: {
    shikiConfig: {
      theme: 'dracula',
      wrap: true
    }
  }
});
