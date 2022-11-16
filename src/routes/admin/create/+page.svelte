<script lang="ts">
	import { enhance } from '$app/forms'
	import type { PageServerData } from './$types'

	export let data: PageServerData

	$: ({ categories } = data)
</script>

<section class="editor">
	<form method="POST" action="?/create" use:enhance>
		<h4>Creating</h4>

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

		<div class="actions">
			<button class="button primary" type="submit">Save</button>
		</div>
	</form>
</section>
