<script lang="ts">
	import type { PageServerData } from './$types'

	export let data: PageServerData

	$: ({ post } = data)
</script>

<section>
	<h4>Editing</h4>

	<form method="POST">
		<label>
			<span>Slug</span>
			<input type="text" name="slug" value={post.slug} />
		</label>

		<label>
			<span>Title</span>
			<input type="text" name="title" value={post.title} />
		</label>

		<label>
			<span>Image</span>
			<input type="text" name="image" value={post.image} />
		</label>

		<label>
			<span>Description</span>
			<input type="text" name="description" value={post.description} />
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

		<textarea name="markdown" rows="10" value={post.markdown} />

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
		font-weight: var(--font-weight-6);
	}

	label:has(input[type='checkbox']) {
		display: block;
	}

	input {
		margin-top: var(--size-2);
		padding: var(--size-3);
		font-weight: var(--font-weight-4);
	}

	textarea {
		width: 100%;
		padding: var(--size-3);
	}

	.publishing {
		display: flex;
		gap: var(--size-3);
	}
</style>
