// Import utilities from `astro:content`
import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';

// Import loader(s)
import { glob } from 'astro/loaders';


// ADD seoSchema like https://github.com/withastro/astro.build/blob/main/src/content/config.ts


export const collections = { 
	blog: defineCollection({
		// Load Markdown and MDX files in the `src/content/blog/` directory.
		loader: glob({ base: './src/content/blog', pattern: '**/**/*.{md,mdx}' }),
		// Type-check frontmatter using a schema
		schema: ({ image }) => z.object({
			title: z.string(),
			description: z.string(),
			author: z.string().optional(),
			// Transform string to Date object
			pubDate: z.coerce.date().optional(),
			updatedDate: z.coerce.date().optional(),
			heroImage: image().optional(),
		}),
	}),

	// Example from https://github.com/withastro/astro.build/blob/main/src/content/config.ts
	pages: defineCollection({
		schema: ({ image }) =>
			z.discriminatedUnion('pageLayout', [
				z.object({
			    //	seo: seoSchema,
					locale: z.enum(['en']).default('en'),
					pageLayout: z.literal('blog'),
					image: image(),
				}),
				z.object({
				//	seo: seoSchema,
					locale: z.enum(['en']).default('en'),
					pageLayout: z.literal('legal').optional(),
					updated_date: z.date().describe('The date this content was last updated.'),
				}),
			]),
	}),
};
