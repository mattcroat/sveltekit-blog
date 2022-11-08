import { error } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'

import { db } from '$lib/database'

async function getPost(slug: string) {
	const post = await db.post.findUnique({
		where: { slug },
		select: { markdown: true },
	})

	if (!post) {
		throw error(404, `Not found`)
	}

	return post
}

export const load: PageServerLoad = async ({ params }) => {
	const post = await getPost(params.slug)
	return { post }
}
