<script lang="ts">
	import { enhance } from '$app/forms'
	import type { PageServerData } from './$types'

	export let data: PageServerData

	$: ({ categories, post } = data)
</script>

<section class="w-full p-8">
	<form method="POST" action="?/save" use:enhance>
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
					class="mt-2 p-4 bg-neutral-700/20 rounded-2xl border border-neutral-600/30"
					type="text"
					name="slug"
					value={post.slug}
					required
				/>
			</label>

			<label>
				<span class="block">Title</span>
				<input
					class="mt-2 p-4 bg-neutral-700/20 rounded-2xl border border-neutral-600/30"
					type="text"
					name="title"
					value={post.title}
					required
				/>
			</label>

			<label>
				<span class="block">Image</span>
				<input
					class="mt-2 p-4 bg-neutral-700/20 rounded-2xl border border-neutral-600/30"
					type="text"
					name="image"
					value={post.image}
					required
				/>
			</label>

			<label>
				<span class="block">Description</span>
				<input
					class="mt-2 p-4 bg-neutral-700/20 rounded-2xl border border-neutral-600/30"
					type="text"
					name="description"
					value={post.description}
					required
				/>
			</label>

			<label>
				<span class="block">Category</span>
				<select
					class="mt-2 p-4 bg-neutral-700/20 rounded-2xl border border-neutral-600/30"
					name="category"
					required
				>
					{#each categories as category}
						{@const selected = category.name === post.category.name}
						<option value={category.name} {selected}>{category.name}</option>
					{/each}
				</select>
			</label>

			<label>
				<span class="block">Markdown</span>
				<textarea
					class="w-full mt-2 p-4 bg-neutral-700/20 rounded-2xl border border-neutral-600/30"
					name="markdown"
					rows="10"
					value={post.markdown}
				/>
			</label>

			<div class="flex gap-4 -mt-4">
				<label>
					<input
						type="checkbox"
						name="published"
						checked={post.published}
						value={post.published}
					/>
					<span class="font-semibold">Published</span>
				</label>

				<label>
					<input
						type="checkbox"
						name="featured"
						checked={post.featured}
						value={post.featured}
					/>
					<span class="font-semibold">Featured</span>
				</label>
			</div>

			<div class="flex gap-4 mt-8">
				<button
					class="inline-block px-4 py-2 font-semibold text-green-900 bg-green-300 rounded-2xl hover:bg-green-200 transition-colors"
					type="submit">Save</button
				>
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
