<script lang="ts">
	import { enhance } from '$app/forms'
	import type { PageServerData } from './$types'

	export let data: PageServerData

	$: ({ categories } = data)
</script>

<section class="w-full p-8">
	<form method="POST" action="?/create" use:enhance>
		<div>
			<p class="text-2xl font-semibold">Creating</p>
		</div>

		<div class="grid gap-6 mt-6">
			<label>
				<span class="block">Slug</span>
				<input
					class="mt-2 p-4 bg-neutral-700/20 rounded-2xl border border-neutral-600/30"
					type="text"
					name="slug"
					placeholder="post-slug"
					required
				/>
			</label>

			<label>
				<span class="block">Title</span>
				<input
					class="mt-2 p-4 bg-neutral-700/20 rounded-2xl border border-neutral-600/30"
					type="text"
					name="title"
					placeholder="Post title"
					required
				/>
			</label>

			<label>
				<span class="block">Image</span>
				<input
					class="mt-2 p-4 bg-neutral-700/20 rounded-2xl border border-neutral-600/30"
					type="text"
					name="image"
					placeholder="Unsplash image"
					required
				/>
			</label>

			<label>
				<span class="block">Description</span>
				<input
					class="mt-2 p-4 bg-neutral-700/20 rounded-2xl border border-neutral-600/30"
					type="text"
					name="description"
					placeholder="Post description"
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
						<option value={category.name}>{category.name}</option>
					{/each}
				</select>
			</label>

			<label>
				<span class="block">Markdown</span>
				<textarea
					class="w-full mt-2 p-4 bg-neutral-700/20 rounded-2xl border border-neutral-600/30"
					name="markdown"
					rows="10"
				/>
			</label>

			<div class="flex gap-4 -mt-4">
				<label>
					<input type="checkbox" name="published" />
					<span class="font-semibold">Published</span>
				</label>

				<label>
					<input type="checkbox" name="featured" />
					<span class="font-semibold">Featured</span>
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
