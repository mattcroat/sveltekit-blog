import { error } from '@sveltejs/kit'
import type { Post } from '@prisma/client'

import { db } from '$lib/database'

export async function getPosts() {
	return await db.post.findMany({
		select: {
			createdAt: true,
			slug: true,
			title: true,
			image: true,
			description: true,
			published: true,
			featured: true,
			categories: {
				select: { name: true },
			},
		},
		orderBy: { createdAt: 'asc' },
	})
}

export async function getPostMarkdown(slug: string) {
	const post = await db.post.findUnique({
		where: { slug },
		select: { markdown: true },
	})

	if (!post) {
		throw error(404, `Not found`)
	}

	return post
}

export async function getPost(slug: string) {
	const post = await db.post.findUnique({
		where: { slug },
	})

	if (!post) {
		throw error(404, 'Not found')
	}

	return { post }
}

export async function updatePost(slug: string, post: Post) {
	await db.post.update({
		where: { slug },
		data: {
			...post,
			featured: Boolean(post.featured),
			published: Boolean(post.published),
		},
	})
}
