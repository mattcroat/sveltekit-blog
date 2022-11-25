<script lang="ts">
	import { enhance } from '$app/forms'
	import type { ActionData, PageServerData } from './$types'

	export let data: PageServerData
	export let form: ActionData

	$: ({ categories } = data)
	$: errors = form?.errors

	const field = `w-80 mt-2 p-4 bg-neutral-700/20 rounded-2xl border border-neutral-600/30 focus:border-red-400 focus:ring-red-400 ${
		errors?.slug && 'border border-red-400'
	}`
	const markdown = `w-full mt-2 p-4 bg-neutral-700/20 rounded-2xl border border-neutral-600/30 focus:border-red-400 focus:ring-red-400 ${
		errors?.slug && 'border border-red-400'
	}`
	const error = 'block mt-2 text-red-400'
</script>

<section class="p-8">
	<form method="POST" action="?/create" autocomplete="off" use:enhance>
		<div>
			<p class="text-2xl font-semibold">Creating</p>
		</div>

		<div class="grid gap-6 mt-6">
			<label>
				<span class="block">Slug</span>

				<input
					class={field}
					type="text"
					name="slug"
					placeholder="post-slug"
					required
				/>

				{#if errors?.slug}
					<span class={error}>
						{errors?.slug[0]}
					</span>
				{/if}
			</label>

			<label>
				<span class="block">Title</span>

				<input
					class={field}
					type="text"
					name="title"
					placeholder="Post title"
					required
				/>

				{#if errors?.title}
					<span class={error}>
						{errors?.title[0]}
					</span>
				{/if}
			</label>

			<label>
				<span class="block">Image</span>

				<input
					class={field}
					type="text"
					name="image"
					placeholder="Unsplash image"
					required
				/>

				{#if errors?.image}
					<span class={error}>
						{errors?.image[0]}
					</span>
				{/if}
			</label>

			<label>
				<span class="block">Description</span>

				<input
					class={field}
					type="text"
					name="description"
					placeholder="Post description"
					required
				/>

				{#if errors?.description}
					<span class={error}>
						{errors?.description[0]}
					</span>
				{/if}
			</label>

			<label>
				<span class="block">Category</span>

				<select class={field} name="category" required>
					{#each categories as category}
						<option value={category.name}>{category.name}</option>
					{/each}
				</select>

				{#if errors?.category}
					<span class={error}>
						{errors?.category[0]}
					</span>
				{/if}
			</label>

			<label>
				<span class="block">Markdown</span>
				<textarea class={markdown} name="markdown" rows="10" />
			</label>

			<div class="flex gap-4 -mt-4">
				<label>
					<input type="hidden" name="published" />
					<input type="checkbox" name="published" />
					<span>Published</span>
				</label>

				<label>
					<input type="hidden" name="featured" />
					<input type="checkbox" name="featured" />
					<span>Featured</span>
				</label>
			</div>

			<div class="mt-8">
				<button
					class="inline-block px-4 py-2 font-semibold text-green-900 bg-green-300 rounded-2xl hover:bg-green-200 transition-colors"
					type="submit"
				>
					Save
				</button>
			</div>
		</div>
	</form>
</section>
