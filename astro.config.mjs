import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: '每日手帐',
			locales: {
				root: {
					label: '简体中文',
					lang: 'zh-CN',
				},
			},
			social: {
				github: 'https://github.com/HaoduStudio/website',
			},
			editLink: {
				baseUrl: 'https://github.com/HaoduStudio/website/edit/master/',
			},
			sidebar: [
				{
					label: '快速上手',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: '安装软件', slug: 'started/index' },
					],
				},
			],
		}),
	],
});
