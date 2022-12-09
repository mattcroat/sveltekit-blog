import { z, ZodError } from 'zod'

export const postSchema = z.object({
	slug: z
		.string()
		.regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, { message: 'Invalid slug' }),
	title: z.string().min(1, { message: 'Missing title' }),
	image: z.string().url({ message: 'Must provide image URL' }),
	description: z.string().min(1, { message: 'Missing description' }),
	category: z.string().min(1, { message: 'Missing category' }),
	markdown: z.string(),
	published: z.string().optional(),
	featured: z.string().optional(),
})

export function validate<Schema extends z.ZodTypeAny>(
	formData: FormData,
	schema: Schema
): {
	data: z.infer<typeof schema>
	errors: z.inferFlattenedErrors<typeof schema> | null
} {
	const data = Object.fromEntries(formData)

	try {
		const result = schema.parse(data)
		return { data: result, errors: null }
	} catch (error) {
		return {
			data,
			errors: (error as ZodError).flatten(),
		}
	}
}
