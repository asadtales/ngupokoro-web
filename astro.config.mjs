import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://ngupokoro.cloud',
  integrations: [sitemap()],
  output: 'static',
});
