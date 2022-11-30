<script lang="ts">
	import { enhance } from '$app/forms'
	import type { ActionData, PageServerData } from './$types'

	export let data: PageServerData
	export let form: ActionData

	$: ({ categories, post } = data)
	$: errors = form?.errors
</script>

<section class="p-8">
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
					class="w-full sm:w-80 mt-2 p-4 bg-neutral-200/40 dark:bg-neutral-700/20 rounded-2xl border border-neutral-200/60 dark:border-neutral-600/30 focus:border-red-400 focus:ring-red-400 {errors?.slug &&
						'border-red-600 dark:border-red-400'}"
					type="text"
					name="slug"
					value={post.slug}
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
					value={post.title}
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
					value={post.image}
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
					value={post.description}
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
						{@const selected = category.name === post.category.name}
						<option value={category.name} {selected}>{category.name}</option>
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
					<span>Published</span>
				</label>

				<label>
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
					class="py-2 font-semibold text-gray-900 dark:text-gray-200 underline underline-offset-8 transition-colors"
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
