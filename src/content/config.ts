import { defineCollection, z } from 'astro:content';

const postCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    author: z.string().default('CODIO'),
    image: z.string().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const projectCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    description: z.string(),
    status: z.enum(['active', 'completed', 'planned']),
    value: z.string().optional(),
    iacNumber: z.string(),
    technologies: z.array(z.string()),
    featured: z.boolean().default(false),
  }),
});

const pageCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    order: z.number().default(0),
  }),
});

export const collections = {
  posts: postCollection,
  projects: projectCollection,
  pages: pageCollection,
};
