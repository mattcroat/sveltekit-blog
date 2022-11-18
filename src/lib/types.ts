import { Prisma } from '@prisma/client'

const postWithCategory = Prisma.validator<Prisma.PostArgs>()({
	select: {
		createdAt: true,
		slug: true,
		title: true,
		image: true,
		description: true,
		published: true,
		category: true,
	},
})

const postWithRequiredFields = Prisma.validator<Prisma.PostArgs>()({
	select: {
		slug: true,
		title: true,
		image: true,
		description: true,
		markdown: true,
		published: true,
		featured: true,
	},
})

export type PostWithCategory = Prisma.PostGetPayload<typeof postWithCategory>

export type PostWithRequiredFields = Prisma.PostGetPayload<
	typeof postWithRequiredFields
>
