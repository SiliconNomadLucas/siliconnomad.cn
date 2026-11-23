// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://siliconnomad.cn',
	integrations: [sitemap()],
	vite: {
		environments: {
			astro: {
				resolve: {
					noExternal: ['yaml', 'picomatch'],
				},
				optimizeDeps: {
					include: ['yaml', 'picomatch'],
				},
			},
		},
	},
});
