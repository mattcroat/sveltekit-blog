<script lang="ts">
	import type { PageServerData } from './$types'

	export let data: PageServerData

	$: ({ categories } = data)
</script>

<section>
	<h4>Creating</h4>

	<form method="POST" action="?/create">
		<label>
			<span>Slug</span>
			<input type="text" name="slug" placeholder="post-slug" required />
		</label>

		<label>
			<span>Title</span>
			<input type="text" name="title" placeholder="Post title" required />
		</label>

		<label>
			<span>Image</span>
			<input type="text" name="image" placeholder="Unsplash image" required />
		</label>

		<label>
			<span>Description</span>
			<input
				type="text"
				name="description"
				placeholder="Post description"
				required
			/>
		</label>

		<label>
			<span>Category</span>
			<select name="category" required>
				{#each categories as category}
					<option value={category.name}>{category.name}</option>
				{/each}
			</select>
		</label>

		<label>
			<span>Markdown</span>
			<textarea name="markdown" rows="10" />
		</label>

		<div class="publishing">
			<label>
				<input type="checkbox" name="published" />
				<span>Published</span>
			</label>

			<label>
				<input type="checkbox" name="featured" />
				<span>Featured</span>
			</label>
		</div>

		<button class="btn" type="submit">Save</button>
	</form>
</section>

<style>
	section {
		padding: var(--size-8);
	}

	form {
		display: grid;
		justify-items: start;
		margin-top: var(--size-6);
		gap: var(--size-3);
	}

	label {
		display: grid;
	}

	label span {
		font-weight: var(--font-weight-6);
	}

	label:has(input[type='checkbox']) {
		display: block;
	}

	label:has(textarea) {
		width: 100%;
	}

	input,
	select {
		margin-top: var(--size-2);
		padding: var(--size-3);
	}

	select {
		text-transform: lowercase;
	}

	textarea {
		margin-top: var(--size-2);
		padding: var(--size-3);
	}

	.publishing {
		display: flex;
		gap: var(--size-3);
	}
</style>
