<script lang="ts">
	import { enhance } from '$app/forms'
	import type { PageServerData } from './$types'

	export let data: PageServerData

	$: ({ categories } = data)
</script>

<section>
	<form method="POST" action="?/create" use:enhance>
		<div>
			<p class="fs-3 font-semibold">Creating</p>
		</div>

		<div class="space-items mt-3">
			<label class="block">
				<p>Slug</p>
				<input
					class="mt-1"
					type="text"
					name="slug"
					placeholder="post-slug"
					required
				/>
			</label>

			<label class="block">
				<p>Title</p>
				<input
					class="mt-1"
					type="text"
					name="title"
					placeholder="Post title"
					required
				/>
			</label>

			<label class="block">
				<p>Image</p>
				<input
					class="mt-1"
					type="text"
					name="image"
					placeholder="Unsplash image"
					required
				/>
			</label>

			<label class="block">
				<p>Description</p>
				<input
					class="mt-1"
					type="text"
					name="description"
					placeholder="Post description"
					required
				/>
			</label>

			<label class="block">
				<p>Category</p>
				<select class="mt-1" name="category" required>
					{#each categories as category}
						<option value={category.name}>{category.name}</option>
					{/each}
				</select>
			</label>

			<label class="block">
				<p>Markdown</p>
				<textarea class="mt-1" name="markdown" rows="10" />
			</label>

			<div class="flex">
				<label class="flex items-center">
					<input type="checkbox" name="published" />
					<span>Published</span>
				</label>

				<label class="flex items-center">
					<input type="checkbox" name="featured" />
					<span>Featured</span>
				</label>
			</div>

			<div class="mt-5">
				<button class="button primary" data-type="primary" type="submit">
					Save
				</button>
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

		& input::placeholder {
			color: var(--text-4);
		}

		& textarea {
			width: 100%;
		}
	}
</style>
