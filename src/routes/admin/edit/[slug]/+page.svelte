<script lang="ts">
	import { enhance } from '$app/forms'
	import type { PageServerData } from './$types'

	export let data: PageServerData

	$: ({ categories, post } = data)
</script>

<section>
	<form method="POST" action="?/save" use:enhance>
		<div class="flex justify-between">
			<p class="fs-3 font-semibold">Editing</p>
			<button
				formaction="?/delete"
				class="button"
				data-type="danger"
				type="submit"
			>
				Delete
			</button>
		</div>

		<div class="space-items mt-3">
			<label class="block">
				<p>Slug</p>
				<input
					class="mt-1"
					type="text"
					name="slug"
					value={post.slug}
					required
				/>
			</label>

			<label class="block">
				<p>Title</p>
				<input
					class="mt-1"
					type="text"
					name="title"
					value={post.title}
					required
				/>
			</label>

			<label class="block">
				<p>Image</p>
				<input
					class="mt-1"
					type="text"
					name="image"
					value={post.image}
					required
				/>
			</label>

			<label class="block">
				<p>Description</p>
				<input
					class="mt-1"
					type="text"
					name="description"
					value={post.description}
					required
				/>
			</label>

			<label class="block">
				<p>Category</p>
				<select class="mt-1" name="category" required>
					{#each categories as category}
						{@const selected = category.name === post.category.name}
						<option value={category.name} {selected}>{category.name}</option>
					{/each}
				</select>
			</label>

			<label class="block">
				<p>Markdown</p>
				<textarea
					class="mt-1"
					name="markdown"
					rows="10"
					value={post.markdown}
				/>
			</label>

			<div class="flex">
				<label class="flex items-center">
					<input
						type="checkbox"
						name="published"
						checked={post.published}
						value={post.published}
					/>
					<span>Published</span>
				</label>

				<label class="flex items-center">
					<input
						type="checkbox"
						name="featured"
						checked={post.featured}
						value={post.featured}
					/>
					<span>Featured</span>
				</label>
			</div>

			<div class="mt-5">
				<button class="button" data-type="primary" type="submit">Save</button>
				<a
					class="button"
					data-type="secondary"
					href="/{post.slug}?preview"
					target="_blank"
					rel="noreferrer"
				>
					Preview
				</a>
			</div>
		</div>
	</form>
</section>

<style lang="postcss">
	section {
		padding: var(--space-4);
	}

	form {
		& label:has(input[type='checkbox']) {
			--gap: var(--space-1);
		}

		& :is(input, select, textarea) {
			--bg: hsl(210 10% 28%);
			--border: hsl(210 10% 32%);

			padding: var(--space-2);
			border: 1px solid var(--border);
			border-radius: var(--round-1);
			background: var(--bg);

			@nest [data-theme='light'] & {
				--bg: hsl(210 17% 94%);
				--border: hsl(210 17% 90%);
			}
		}

		& textarea {
			width: 100%;
		}
	}
</style>
