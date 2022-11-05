import type { PageLoad } from './$types'

export const load: PageLoad = async ({ fetch }) => {
	const response = await fetch('api/posts')

	return {
		posts: response.json(),
	}
}
