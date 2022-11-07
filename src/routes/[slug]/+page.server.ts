import { error } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'

import { db } from '$lib/database'

async function getPost(slug: string) {
	return await db.post.findUnique({
		where: { slug },
		select: { markdown: true },
	})
}

export const load: PageServerLoad = async ({ params }) => {
	const post = await getPost(params.slug)

	if (!post) {
		throw error(404, `Could not find ${params.slug}.`)
	}

	return { post }
}
