import type { Post, Categories } from '@prisma/client'

export type PostWithCategories = Post & {
	category: Categories
}

export type PostWithoutMarkdown = Omit<Post, 'markdown'>

export type PostWithRequiredFields = Omit<
	Post,
	'id' | 'createdAt' | 'categoryId'
>
