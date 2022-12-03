<script lang="ts">
	import { enhance } from '$app/forms'
	import type { ActionData, PageServerData } from './$types'

	export let data: PageServerData
	export let form: ActionData

	$: ({ categories } = data)
	$: errors = form?.errors
</script>

<section>
	<form method="POST" action="?/create" autocomplete="off" use:enhance>
		<span class="title">Creating</span>

		<div class="fields">
			<label>
				<span>Slug</span>
				<input type="text" name="slug" placeholder="post-slug" required />

				{#if errors?.slug}
					<span>{errors?.slug[0]}</span>
				{/if}
			</label>

			<label>
				<span>Title</span>
				<input type="text" name="title" placeholder="Post title" required />

				{#if errors?.title}
					<span>{errors?.title[0]}</span>
				{/if}
			</label>

			<label>
				<span>Image</span>
				<input type="text" name="image" placeholder="Unsplash image" required />

				{#if errors?.image}
					<span>{errors?.image[0]}</span>
				{/if}
			</label>

			<label>
				<span>Description</span>
				<input
					type="text"
					name="description"
					placeholder="Post description"
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
						<option value={category.name}>{category.name}</option>
					{/each}
				</select>

				{#if errors?.category}
					<span>{errors?.category[0]}</span>
				{/if}
			</label>

			<label>
				<span>Markdown</span>
				<textarea name="markdown" rows="10" />
			</label>

			<div class="publishing">
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
				<button type="submit">Save</button>
			</div>
		</div>
	</form>
</section>

<style lang="postcss">
	section {
		padding-left: var(--space-6);
	}

	.fields {
		margin-block-start: var(--space-2);
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

	button {
		width: max-content;
		margin: 0;
	}
</style>
