import rss from '@astrojs/rss';
import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) =>
	rss({
		title: '硅基游民 Lucas',
		description: '保持对这个世界的好奇心',
		site: site ?? 'https://siliconnomad.cn',
		items: [],
		customData: '<language>zh-CN</language>',
	});
