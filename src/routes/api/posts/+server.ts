import { json } from '@sveltejs/kit'
import * as fs from 'fs/promises'
import matter from 'gray-matter'
import type { RequestHandler } from './$types'

type Post = {
	title: string
	slug: string
	description: string
	date: string
	tags: string[]
}

async function getPosts() {
	const posts: Post[] = []

	const paths = await fs.readdir('src/posts')

	for (const path of paths) {
		const post = await fs.readFile(`src/posts/${path}`, 'utf-8')
		const frontmatter = matter(post)
		posts.push(frontmatter.data as Post)
	}

	posts.sort((p1, p2) => +p1.date - +p2.date)

	return posts
}

async function sleep(seconds: number) {
	await new Promise((resolve) => setTimeout(() => resolve(null), seconds))
}

export const GET: RequestHandler = async ({ setHeaders }) => {
	const posts = await getPosts()

	setHeaders({
		'Cache-Control': `public, max-age=${60} s-maxage=${60}`,
	})

	await sleep(2000)

	return json(posts)
}
