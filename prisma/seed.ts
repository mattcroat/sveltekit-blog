import { PrismaClient } from '@prisma/client'
const db = new PrismaClient()

const posts = 40
const categories = ['html', 'css', 'javascript', 'svelte']

async function createCategories() {
	for (const name of categories) {
		await db.categories.create({ data: { name } })
	}
}

async function createPosts() {
	for (let id = 0; id < posts; id++) {
		const categoryId = Math.ceil(Math.random() * categories.length)

		await db.post.create({
			data: {
				slug: `post-${id}`,
				title: `the post with a long title #${id}`,
				image:
					'https://images.unsplash.com/photo-1470093851219-69951fcbb533?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
				description:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent blandit pellentesque metus, vitae malesuada orci facilisis eget. Aenean leo est, euismod vel tempus vitae, condimentum id mauris.',
				markdown: '',
				published: true,
				featured: id === 0,
				category: { connect: { id: categoryId } },
			},
		})
	}
}

async function main() {
	await createCategories()
	await createPosts()
}

main()
	.then(async () => {
		await db.$disconnect()
	})
	.catch(async (e) => {
		console.error(e)
		await db.$disconnect()
		process.exit(1)
	})
