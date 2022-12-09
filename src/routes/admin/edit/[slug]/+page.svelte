<script lang="ts">
	import { enhance, type SubmitFunction } from '$app/forms'
	import type { ActionData, PageServerData } from './$types'

	import { Eye, Save, Trash2 } from 'lucide-svelte'
	import toast from 'svelte-french-toast'

	import Modal from '$lib/components/modal.svelte'

	export let data: PageServerData
	export let form: ActionData

	$: ({ categories, post } = data)
	$: errors = form?.errors

	let modal: HTMLDialogElement

	const savePost: SubmitFunction = () => {
		return async ({ result, update }) => {
			switch (result.type) {
				case 'success':
					toast.success('Changes saved')
					break
				case 'error':
					toast.error('Something went wrong')
					break
			}

			update({ reset: false })
		}
	}

	function openModal() {
		modal.showModal()
	}
</script>

<Modal bind:modal title="Are you sure?" text="Deleting a post is permanent.">
	<form method="POST" action="?/delete" style="margin: 0">
		<button class="danger" type="submit">
			<div class="items-center">
				<Trash2 />
				<span>Delete</span>
			</div>
		</button>
	</form>
</Modal>

<section>
	<h1>Editing</h1>

	<form method="POST" action="?/save" autocomplete="off" use:enhance={savePost}>
		<label>
			<span>Slug</span>
			<input type="hidden" name="currentSlug" value={post.slug} />
			<input
				type="text"
				name="slug"
				value={post.slug}
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
				value={post.title}
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
				value={post.image}
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
				value={post.description}
				aria-invalid={errors?.description && true}
				required
			/>

			{#if errors?.description}
				<span>{errors?.description[0]}</span>
			{/if}
		</label>

		<label>
			<span>Category</span>
			<select name="category" aria-invalid={errors?.category && true} required>
				{#each categories as category}
					{@const selected = category.name === post.category.name}
					<option value={category.name} {selected}>{category.name}</option>
				{/each}
			</select>

			{#if errors?.category}
				<p class="error">{errors?.category[0]}</p>
			{/if}
		</label>

		<label>
			<span>Markdown</span>
			<textarea name="markdown" rows="10" value={post.markdown} />
		</label>

		<div class="flex">
			<label>
				<input
					type="checkbox"
					name="published"
					role="switch"
					checked={post.published}
					value={post.published}
				/>
				<span>Published</span>
			</label>

			<label>
				<input
					type="checkbox"
					name="featured"
					role="switch"
					checked={post.featured}
					value={post.featured}
				/>
				<span>Featured</span>
			</label>
		</div>

		<div class="actions space-between">
			<div class="flex">
				<button class="items-center" type="submit">
					<Save />
					<span>Save</span>
				</button>

				<a
					href="/{post.slug}?preview"
					role="button"
					target="_blank"
					rel="noreferrer"
					class="contrast outline"
				>
					<div class="items-center">
						<Eye />
						<span>Preview</span>
					</div>
				</a>
			</div>

			<div>
				<button on:click={openModal} class="danger" type="button">
					<div class="items-center">
						<Trash2 />
						<span>Delete</span>
					</div>
				</button>
			</div>
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
