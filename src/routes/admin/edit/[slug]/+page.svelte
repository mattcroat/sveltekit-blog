<script lang="ts">
	import { enhance } from '$app/forms'
	import type { ActionData, PageServerData } from './$types'

	export let data: PageServerData
	export let form: ActionData

	$: ({ categories, post } = data)
	$: errors = form?.errors

	$: console.log(form)

	const field = `mt-2 p-4 bg-neutral-700/20 rounded-2xl border border-neutral-600/30 focus:border-red-400 focus:ring-red-400 ${
		errors?.slug && 'border border-red-400'
	}`
	const error = 'block mt-2 text-red-400'
</script>

<section class="w-full p-8">
	<form method="POST" action="?/save" autocomplete="off" use:enhance>
		<div class="flex justify-between">
			<p class="text-2xl font-semibold">Editing</p>
			<button
				class="inline-block px-4 py-2 font-semibold text-red-900 bg-red-200 rounded-2xl hover:bg-red-100 transition-colors"
				formaction="?/delete"
				type="submit"
			>
				Delete
			</button>
		</div>

		<div class="grid gap-6 mt-6">
			<label>
				<span class="block">Slug</span>

				<input
					class={field}
					type="text"
					name="slug"
					value={post.slug}
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
					value={post.title}
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
					value={post.image}
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
					value={post.description}
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
						{@const selected = category.name === post.category.name}
						<option value={category.name} {selected}>{category.name}</option>
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
				<textarea
					class="w-full {field}"
					name="markdown"
					rows="10"
					value={post.markdown}
				/>
			</label>

			<div class="flex gap-4 -mt-4">
				<label>
					<input type="hidden" name="published" />
					<input
						type="checkbox"
						name="published"
						checked={post.published}
						value={post.published}
					/>
					<span>Published</span>
				</label>

				<label>
					<input type="hidden" name="featured" />
					<input
						type="checkbox"
						name="featured"
						checked={post.featured}
						value={post.featured}
					/>
					<span>Featured</span>
				</label>
			</div>

			<div class="flex gap-4 mt-8">
				<button
					class="inline-block px-4 py-2 font-semibold text-green-900 bg-green-300 rounded-2xl hover:bg-green-200 transition-colors"
					type="submit"
				>
					Save
				</button>
				<a
					class="py-2 font-semibold text-gray-200 underline underline-offset-8 hover:text-gray-50 transition-colors"
					href="/{post.slug}?preview"
					target="_blank"
					rel="noreferrer"
				>
					Preview
				</a>
			</div>
		</div>
	</form>
</section>
