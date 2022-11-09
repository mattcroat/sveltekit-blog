import { error } from '@sveltejs/kit'
import type { PostWithRequiredFields } from './types'

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
			category: true,
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

export async function getPostWithCategories(slug: string) {
	const post = await db.post.findUnique({
		where: { slug },
		include: { category: true },
	})
	const categories = await db.categories.findMany()

	if (!post) {
		throw error(404, 'Not found')
	}

	return { post, categories }
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

export async function createPost(
	post: PostWithRequiredFields,
	category: string
) {
	await db.post.create({
		data: {
			...post,
			category: {
				connect: { name: category },
			},
		},
	})
}

export async function updatePost(
	post: PostWithRequiredFields,
	category: string
) {
	await db.post.update({
		where: { slug: post.slug },
		data: {
			...post,
			category: {
				connect: { name: category },
			},
		},
	})
}

export async function getCategories() {
	return await db.categories.findMany()
}
