<script lang="ts">
	import { enhance } from '$app/forms'
	import type { PageServerData } from './$types'

	export let data: PageServerData

	$: ({ categories, post } = data)
</script>

<section class="editor">
	<h4>Editing</h4>

	<form method="POST" action="?/save" use:enhance>
		<label>
			<span>Slug</span>
			<input type="text" name="slug" value={post.slug} required />
		</label>

		<label>
			<span>Title</span>
			<input type="text" name="title" value={post.title} required />
		</label>

		<label>
			<span>Image</span>
			<input type="text" name="image" value={post.image} required />
		</label>

		<label>
			<span>Description</span>
			<input type="text" name="description" value={post.description} required />
		</label>

		<label>
			<span>Category</span>
			<select name="category" required>
				{#each categories as category}
					{@const selected = category.name === post.category.name}
					<option value={category.name} {selected}>{category.name}</option>
				{/each}
			</select>
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

		<div class="actions">
			<button class="button" type="submit">Save</button>
			<button formaction="?/delete" class="button danger" type="submit">
				Delete
			</button>
		</div>
	</form>
</section>
