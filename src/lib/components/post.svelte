<script lang="ts">
	import { formatDate } from '$lib/utils'
	import type { PostWithCategories } from '$lib/types'

	export let post: PostWithCategories
	export let featured = false

	const featuredPost = featured ? 'featured' : null
</script>

<a href={post.slug}>
	<article class="post" data-post={featuredPost}>
		<div class="cover">
			<img src={post.image} alt={post.title} />
		</div>

		<div class="details">
			<div class="category">{post.categories[0].name}</div>
			<h2 class="title">{post.title}</h2>

			<p class="description">{post.description}</p>

			<time>{formatDate(post.createdAt)}</time>
		</div>
	</article>
</a>

<style>
	a:hover img {
		scale: 1.2;
	}

	a:hover .cover {
		border-radius: var(--radius-3);
		outline: 2px solid var(--brand);
		outline-offset: var(--size-2);
	}

	.cover {
		overflow: hidden;
	}

	.cover img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: top;
		border-radius: var(--radius-3);
		box-shadow: var(--shadow-2);
		transition: all 0.3s ease;
	}

	.details {
		display: grid;
		grid-auto-rows: min-content;
		padding: 0 var(--size-3);
		gap: var(--size-3);
	}

	.title {
		color: var(--gray-0);
		font-weight: var(--font-weight-6);
		font-size: var(--font-size-4);
		text-transform: capitalize;
	}

	time {
		color: var(--gray-6);
	}

	.category {
		margin-top: var(--size-6);
		color: var(--brand);
		letter-spacing: var(--font-letterspacing-1);
		text-transform: lowercase;
	}

	.description {
		color: var(--gray-4);
	}

	.post[data-post='featured'] .details {
		padding: 0 var(--size-6);
	}

	@media (min-width: 768px) {
		.post[data-post='featured'] {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
		}

		.post[data-post='featured'] .title {
			font-size: var(--font-size-5);
		}
	}
</style>
