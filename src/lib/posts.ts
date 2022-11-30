import { error } from '@sveltejs/kit'
import type { Post } from './types'

import { db } from '$lib/database'

export async function getPosts() {
	const posts = await db.post.findMany({
		where: { published: true },
		select: {
			createdAt: true,
			slug: true,
			title: true,
			image: true,
			description: true,
			published: true,
			category: true,
		},
		orderBy: { createdAt: 'desc' },
	})

	if (!posts) {
		throw error(404, 'Could not find posts')
	}

	return posts
}

export async function getPostsToEdit() {
	const posts = await db.post.findMany({
		select: {
			slug: true,
			title: true,
		},
	})

	if (!posts) {
		throw error(404, 'Posts not found')
	}

	return posts
}

export async function getFeaturedPost() {
	const featuredPost = await db.post.findFirst({
		where: {
			featured: true,
			published: true,
		},
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

	return featuredPost
}

export async function getPostMarkdown(slug: string, isPreview: boolean) {
	const post = await db.post.findUnique({
		where: { slug },
		select: { markdown: true, published: true },
	})

	if (!post || (!post.published && !isPreview)) {
		throw error(404, 'Post not found')
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
		throw error(404, 'Post not found')
	}

	return { post, categories }
}

export async function getPost(slug: string) {
	const post = await db.post.findUnique({
		where: { slug },
	})

	if (!post) {
		throw error(404, 'Post not found')
	}

	return { post }
}

async function updateFeaturedPost() {
	const featuredPost = await db.post.findFirst({
		where: { featured: { equals: true } },
	})

	if (featuredPost) {
		await db.post.update({
			where: { slug: featuredPost?.slug },
			data: { featured: false },
		})
	}
}

async function isFeaturedPost(slug: string) {
	const post = await db.post.findFirst({
		where: { slug },
		select: { featured: true },
	})

	if (!post) {
		throw error(404, 'Post not found')
	}

	return post.featured
}

export async function createPost(post: Post, category: string) {
	if (post.featured) {
		updateFeaturedPost()
	}

	await db.post.create({
		data: {
			...post,
			category: {
				connect: { name: category },
			},
		},
	})
}

export async function updatePost(post: Post, category: string) {
	if (post.featured) {
		const isFeatured = await isFeaturedPost(post.slug)
		!isFeatured && updateFeaturedPost()
	}

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

export async function deletePost(slug: string) {
	await db.post.delete({ where: { slug } })
}
