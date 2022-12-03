<script lang="ts">
	import { enhance } from '$app/forms'
	import type { ActionData, PageServerData } from './$types'

	export let data: PageServerData
	export let form: ActionData

	$: ({ categories, post } = data)
	$: errors = form?.errors
</script>

<section>
	<span class="title">Editing</span>

	<form method="POST" action="?/save" autocomplete="off" use:enhance>
		<div class="fields">
			<label>
				<span>Slug</span>
				<input type="hidden" name="currentSlug" value={post.slug} />
				<input type="text" name="slug" value={post.slug} required />

				{#if errors?.slug}
					<span>{errors?.slug[0]}</span>
				{/if}
			</label>

			<label>
				<span>Title</span>
				<input type="text" name="title" value={post.title} required />

				{#if errors?.title}
					<span>{errors?.title[0]}</span>
				{/if}
			</label>

			<label>
				<span>Image</span>
				<input type="text" name="image" value={post.image} required />

				{#if errors?.image}
					<span>{errors?.image[0]}</span>
				{/if}
			</label>

			<label>
				<span>Description</span>
				<input
					type="text"
					name="description"
					value={post.description}
					required
				/>

				{#if errors?.description}
					<span>{errors?.description[0]}</span>
				{/if}
			</label>

			<label>
				<span>Category</span>
				<select name="category" required>
					{#each categories as category}
						{@const selected = category.name === post.category.name}
						<option value={category.name} {selected}>{category.name}</option>
					{/each}
				</select>

				{#if errors?.category}
					<span>{errors?.category[0]}</span>
				{/if}
			</label>

			<label>
				<span>Markdown</span>
				<textarea name="markdown" rows="10" value={post.markdown} />
			</label>

			<div class="publishing">
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

			<div class="actions">
				<div class="submit-preview">
					<button type="submit">Save</button>
					<a
						class="contrast outline"
						href="/{post.slug}?preview"
						role="button"
						target="_blank"
						rel="noreferrer"
					>
						Preview
					</a>
				</div>

				<div>
					<button formaction="?/delete" type="submit">Delete</button>
				</div>
			</div>
		</div>
	</form>
</section>

<style lang="postcss">
	section {
		padding-left: var(--space-6);
	}

	.header {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.fields {
		margin-top: var(--space-2);
	}

	.title {
		color: white;
		font-weight: 600;
		font-size: var(--fs-3);
	}

	.publishing {
		display: flex;
		gap: var(--space-2);
	}

	.actions {
		display: flex;
		justify-content: space-between;
		margin-top: var(--space-6);
	}

	.submit-preview {
		display: flex;
		gap: var(--space-1);
	}

	button {
		margin: 0;
	}
</style>
