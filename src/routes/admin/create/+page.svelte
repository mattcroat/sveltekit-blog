<script lang="ts">
	import { Save } from 'lucide-svelte'
	import { toast } from 'svelte-french-toast'

	import { enhance, type SubmitFunction } from '$app/forms'
	import type { ActionData, PageServerData } from './$types'

	export let data: PageServerData
	export let form: ActionData

	$: ({ categories } = data)
	$: errors = form?.errors

	const createPost: SubmitFunction = () => {
		return async ({ result, update }) => {
			switch (result.type) {
				case 'redirect':
					toast.success('Post created')
					break
				case 'error':
					toast.error('Something went wrong')
					break
				default:
					// TODO: would be neat to scroll to first error element
					// so it's not out of view
					window.scrollTo({ top: 0, behavior: 'smooth' })
			}

			update()
		}
	}
</script>

<section>
	<h1>Creating</h1>

	<form
		method="POST"
		action="?/create"
		autocomplete="off"
		use:enhance={createPost}
	>
		<label>
			<span>Slug</span>
			<input
				type="text"
				name="slug"
				placeholder="post-slug"
				aria-invalid={errors?.slug && true}
				required
			/>

			{#if errors?.slug}
				<p class="error">{errors?.slug[0]}</p>
			{/if}
		</label>

		<label>
			<span>Title</span>
			<input
				type="text"
				name="title"
				placeholder="Post title"
				aria-invalid={errors?.title && true}
				required
			/>

			{#if errors?.title}
				<p class="error">{errors?.title[0]}</p>
			{/if}
		</label>

		<label>
			<span>Image</span>
			<input
				type="text"
				name="image"
				placeholder="Unsplash image"
				aria-invalid={errors?.image && true}
				required
			/>

			{#if errors?.image}
				<p class="error">{errors?.image[0]}</p>
			{/if}
		</label>

		<label>
			<span>Description</span>
			<input
				type="text"
				name="description"
				placeholder="Post description"
				aria-invalid={errors?.description && true}
				required
			/>

			{#if errors?.description}
				<p class="error">{errors?.description[0]}</p>
			{/if}
		</label>

		<label>
			<span>Category</span>
			<select name="category" aria-invalid={errors?.category && true} required>
				{#each categories as category}
					<option value={category.name}>{category.name}</option>
				{/each}
			</select>

			{#if errors?.category}
				<p class="error">{errors?.category[0]}</p>
			{/if}
		</label>

		<label>
			<span>Markdown</span>
			<textarea name="markdown" rows="10" />
		</label>

		<div class="flex">
			<label>
				<input type="checkbox" name="published" role="switch" />
				<span>Published</span>
			</label>

			<label>
				<input type="checkbox" name="featured" role="switch" />
				<span>Featured</span>
			</label>
		</div>

		<div class="actions">
			<button type="submit">
				<Save />
				<span>Save</span>
			</button>
		</div>
	</form>
</section>

<style lang="postcss">
	form {
		margin-top: var(--space-2);

		& label:not(:has([type='checkbox'])) {
			display: grid;
			gap: var(--space-1);
		}

		& :is(input, select) {
			max-width: 400px;
		}
	}

	.error {
		margin-bottom: var(--space-2);
		color: var(--clr-text-error);
	}

	.actions {
		margin-top: var(--space-6);
	}
</style>
