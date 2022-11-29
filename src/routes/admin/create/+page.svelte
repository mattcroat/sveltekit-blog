<script lang="ts">
	import { enhance } from '$app/forms'
	import type { ActionData, PageServerData } from './$types'

	export let data: PageServerData
	export let form: ActionData

	$: ({ categories } = data)
	$: errors = form?.errors
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
					class="w-full sm:w-80 mt-2 p-4 bg-neutral-200/40 dark:bg-neutral-700/20 rounded-2xl border border-neutral-200/60 dark:border-neutral-600/30 focus:border-red-400 focus:ring-red-400 {errors?.slug &&
						'border-red-600 dark:border-red-400'}"
					type="text"
					name="slug"
					placeholder="post-slug"
					required
				/>

				{#if errors?.slug}
					<span class="block mt-2 text-red-600 dark:text-red-400">
						{errors?.slug[0]}
					</span>
				{/if}
			</label>

			<label>
				<span class="block">Title</span>

				<input
					class="w-full sm:w-80 mt-2 p-4 bg-neutral-200/40 dark:bg-neutral-700/20 rounded-2xl border border-neutral-200/60 dark:border-neutral-600/30 focus:border-red-400 focus:ring-red-400 {errors?.title &&
						'border-red-600 dark:border-red-400'}"
					type="text"
					name="title"
					placeholder="Post title"
					required
				/>

				{#if errors?.title}
					<span class="block mt-2 text-red-600 dark:text-red-400">
						{errors?.title[0]}
					</span>
				{/if}
			</label>

			<label>
				<span class="block">Image</span>

				<input
					class="w-full sm:w-80 mt-2 p-4 bg-neutral-200/40 dark:bg-neutral-700/20 rounded-2xl border border-neutral-200/60 dark:border-neutral-600/30 focus:border-red-400 focus:ring-red-400 {errors?.image &&
						'border-red-600 dark:border-red-400'}"
					type="text"
					name="image"
					placeholder="Unsplash image"
					required
				/>

				{#if errors?.image}
					<span class="block mt-2 text-red-600 dark:text-red-400">
						{errors?.image[0]}
					</span>
				{/if}
			</label>

			<label>
				<span class="block">Description</span>

				<input
					class="w-full sm:w-80 mt-2 p-4 bg-neutral-200/40 dark:bg-neutral-700/20 rounded-2xl border border-neutral-200/60 dark:border-neutral-600/30 focus:border-red-400 focus:ring-red-400 {errors?.description &&
						'border-red-600 dark:border-red-400'}"
					type="text"
					name="description"
					placeholder="Post description"
					required
				/>

				{#if errors?.description}
					<span class="block mt-2 text-red-600 dark:text-red-400">
						{errors?.description[0]}
					</span>
				{/if}
			</label>

			<label>
				<span class="block">Category</span>

				<select
					class="w-full sm:w-80 mt-2 p-4 bg-neutral-200/40 dark:bg-neutral-700/20 rounded-2xl border border-neutral-200/60 dark:border-neutral-600/30 focus:border-red-400 focus:ring-red-400 {errors?.category &&
						'border-red-600 dark:border-red-400'}"
					name="category"
					required
				>
					{#each categories as category}
						<option value={category.name}>{category.name}</option>
					{/each}
				</select>

				{#if errors?.category}
					<span class="block mt-2 text-red-600 dark:text-red-400">
						{errors?.category[0]}
					</span>
				{/if}
			</label>

			<label>
				<span class="block">Markdown</span>
				<textarea
					class="w-full mt-2 p-4 bg-neutral-200/40 dark:bg-neutral-700/20 rounded-2xl border border-neutral-200/60 dark:border-neutral-600/30 focus:border-red-400 focus:ring-red-400 {errors?.markdown &&
						'border-red-600 dark:border-red-400'}"
					name="markdown"
					rows="10"
				/>
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
