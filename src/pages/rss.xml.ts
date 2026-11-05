import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ site }) => {
	const articles = (await getCollection('articles', ({ data }) => !data.draft))
		.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

	return rss({
		title: '硅基游民 Lucas',
		description: '保持对这个世界的好奇心',
		site: site ?? 'https://siliconnomad.cn',
		items: articles.map((article) => ({
			title: article.data.title,
			description: article.data.description,
			pubDate: article.data.pubDate,
			link: `/articles/${article.id}/`,
		})),
		customData: '<language>zh-CN</language>',
	});
};
