<script lang="ts">
	import type { PageData } from './$types'

	export let data: PageData

	function formatDate(date: string) {
		return new Intl.DateTimeFormat('en', {
			day: 'numeric',
			month: 'short',
			year: 'numeric',
		}).format(new Date(date))
	}
</script>

<main class="posts">
	{#each data.posts as post}
		<article>
			<a href={post.slug}>
				<div class="cover">
					<img
						src="https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80"
						alt="Unsplash"
					/>
				</div>

				<div class="details">
					<div class="category">{post.categories[0].name}</div>
					<div class="title">{post.title}</div>

					<p class="description">
						Lorem ipsum dolor sit amet pasta banana legroni abra magna vox.
					</p>

					<time class="time">{formatDate(post.createdAt)}</time>
				</div>
			</a>
		</article>
	{/each}
</main>

<style>
	.posts {
		display: flex;
		gap: var(--size-8);
	}

	article {
		max-width: 400px;
	}

	article a {
		text-decoration: none;
	}

	article a:hover img {
		scale: 1.2;
	}

	article a:hover .cover {
		outline: 2px solid var(--red-6);
		outline-offset: var(--size-2);
		border-radius: var(--radius-3);
	}

	.cover {
		overflow: hidden;
	}

	.cover img {
		border-radius: var(--radius-3);
		box-shadow: var(--shadow-2);
		transition: all 0.3s ease;
	}

	.details {
		display: grid;
		gap: var(--size-3);
		padding: 0 var(--size-3);
	}

	.title {
		font-size: var(--font-size-4);
		font-weight: var(--font-weight-7);
		color: var(--gray-0);
		text-transform: capitalize;
	}

	.time {
		color: var(--gray-6);
	}

	.category {
		margin-top: var(--size-6);
		color: var(--red-6);
		letter-spacing: var(--font-letterspacing-1);
		text-transform: capitalize;
	}

	.description {
		color: var(--gray-4);
	}
</style>
