export type Post = {
	createdAt: string
	slug: string
	title: string
	image: string
	description: string
	published: string
	featured: boolean
	categories: {
		name: string
	}[]
}
