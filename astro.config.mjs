import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import solid from '@astrojs/solid-js';
import sentry from "@sentry/astro";
import node from "@astrojs/node";
import clerk from "@clerk/astro";

// https://astro.build/config
export default defineConfig({
  integrations: [solid(), sentry({
    dsn: "https://2c75191f8c460efd122bf5b4dc1d6f59@o4507588860575744.ingest.us.sentry.io/4507729891557376",
    sourceMapsUploadOptions: {
      project: "dailynotes-website",
      authToken: process.env.SENTRY_AUTH_TOKEN,
    },
  }), starlight({
    title: '每日手帐',
    locales: {
      root: {
        label: '简体中文',
        lang: 'zh-CN'
      }
    },
    social: {
      github: 'https://github.com/HaoduStudio/website'
    },
    editLink: {
      baseUrl: 'https://github.com/HaoduStudio/website/edit/master/'
    },
    sidebar: [{
      label: '快速上手',
      items: [
      // Each item here is one entry in the navigation menu.
      {
        label: '安装软件',
        slug: 'started/index'
      }]
    }],
    customCss: ['./src/assets/default.css'],
  })],
  adapter: node({ mode: "standalone" }),
  output: "server"
});