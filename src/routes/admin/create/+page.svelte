<script lang="ts">
	import { enhance } from '$app/forms'
	import type { PageServerData } from './$types'

	export let data: PageServerData

	$: ({ categories } = data)
</script>

<section class="p-8">
	<form method="POST" action="?/create" use:enhance>
		<div>
			<p class="font-semibold">Creating</p>
		</div>

		<div>
			<label>
				<p>Slug</p>
				<input type="text" name="slug" placeholder="post-slug" required />
			</label>

			<label>
				<p>Title</p>
				<input type="text" name="title" placeholder="Post title" required />
			</label>

			<label>
				<p>Image</p>
				<input type="text" name="image" placeholder="Unsplash image" required />
			</label>

			<label>
				<p>Description</p>
				<input
					type="text"
					name="description"
					placeholder="Post description"
					required
				/>
			</label>

			<label>
				<p>Category</p>
				<select name="category" required>
					{#each categories as category}
						<option value={category.name}>{category.name}</option>
					{/each}
				</select>
			</label>

			<label>
				<p>Markdown</p>
				<textarea name="markdown" rows="10" />
			</label>

			<div>
				<label>
					<input type="checkbox" name="published" />
					<span>Published</span>
				</label>

				<label>
					<input type="checkbox" name="featured" />
					<span>Featured</span>
				</label>
			</div>

			<div>
				<button type="submit">Save</button>
			</div>
		</div>
	</form>
</section>
