// Import loader(s)
import { file, glob } from 'astro/loaders';

// Import utilities from `astro:content`
import { defineCollection, z, reference } from 'astro:content';
import authors from './data/authors/authors.json';

// ADD seoSchema like https://github.com/withastro/astro.build/blob/main/src/content/config.ts

export const collections = { 
	
	authors: defineCollection({
  		loader: file('src/data/authors/authors.json'),
  		schema: ({ image }) => 
			z
				.object({
					image: image().optional(),
					name: z.string(),
					linkedin: z.string().url().optional(),
					github: z.string().url().optional(),
				})
				.strict(),
	}),
	
	blog: defineCollection({
		// Load Markdown and MDX files in the `src/content/blog/` directory.
		loader: glob({ base: './src/content/blog', pattern: '**/[^_]*.{md,mdx}' }),
		// Type-check frontmatter using a schema
		schema: ({ image }) => z.object({  					//  The image helper for the content collections schema lets you validate and import the image. (source: https://docs.astro.build/en/guides/images/#setting-default-values)
			title: z.string().describe('The blog title'),
			description: z
				.string()
				.describe('Add description here'),
			// Reference a single author from the `authors` collection by `id`
    		// authors: reference('authors').optional(),
			authors: z
				.enum(Object.keys(authors) as [keyof typeof authors, ...(keyof typeof authors)[]])
				.array()
				.describe('Listing authors, e.g. `["James", "Jane"]`'),

    		// Reference an array of related posts from the `blog` collection by `slug`
    		relatedPosts: z.array(reference('blog')).optional(),
			// Transform string to Date object
			pubDate: z.coerce.date().optional(),
			updatedDate: z.coerce.date().optional(),
			heroImage: image().optional(),
			image: z.object({
				src: z.string().optional(),
				alt: z.string().optional(),
			layout: z.literal('blog').optional(),
			}),
		}),
	}),
	
	// Example from https://github.com/withastro/astro.build/blob/main/src/content/config.ts
	/*
	page: defineCollection({
		schema: ({ image }) =>
			z.discriminatedUnion('pageLayout', [
				z.object({
			    //	seo: seoSchema,
					locale: z.enum(['en-gb']).default('en-gb'),
					pageLayout: z.literal('blog'),
					image: image(),
				}),
				z.object({
				//	seo: seoSchema,
					locale: z.enum(['en-gb']).default('en-gb'),
					pageLayout: z.literal('legal').optional(),
					updated_date: z.date().optional().describe('The date this content was last updated.'),
				}),
			]),
	}),
	*/	
};
