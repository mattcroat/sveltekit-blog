import type { Post, Category } from '@prisma/client'

export type PostWithCategories = Post & {
	categories: Category[]
}

export type PostWithoutMarkdown = Omit<Post, 'markdown'>
