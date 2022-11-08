<script lang="ts">
	import type { PageServerData } from './$types'

	export let data: PageServerData
</script>

<section>
	<h4>Editing</h4>

	<form method="POST">
		<label>
			<div>Slug</div>
			<input type="text" name="slug" value={data.post.slug} />
		</label>

		<label>
			<div>Title</div>
			<input type="text" name="title" value={data.post.title} />
		</label>

		<label>
			<div>Image</div>
			<input type="text" name="image" value={data.post.image} />
		</label>

		<label>
			<div>Description</div>
			<input type="text" name="description" value={data.post.description} />
		</label>

		<div class="flags">
			<label class="test">
				<input
					type="checkbox"
					name="published"
					checked={data.post.published}
					value={data.post.published}
				/>
				<span>Published</span>
			</label>

			<label>
				<input
					type="checkbox"
					name="featured"
					checked={data.post.featured}
					value={data.post.featured}
				/>
				<span>Featured</span>
			</label>
		</div>

		<textarea name="markdown" rows="10" value={data.post.markdown} />

		<button type="submit">Save</button>
	</form>
</section>

<style>
	section {
		padding: var(--size-8);
	}

	form {
		display: grid;
		margin-top: var(--size-6);
		gap: var(--size-3);
	}

	input,
	textarea,
	button {
		border-radius: var(--radius-3);
	}

	input {
		margin-top: var(--size-2);
		padding: var(--size-3);
	}

	label span,
	label div {
		font-weight: var(--font-weight-6);
	}

	button {
		max-width: 100px;
	}

	.flags {
		display: flex;
		gap: var(--size-3);
	}

	textarea {
		padding: var(--size-3);
	}
</style>
