<script lang="ts">
	type Post = {
		slug: string
		title: string
	}

	export let posts: Post[]
</script>

<aside>
	<h4 class="text-2xl font-semibold">Posts</h4>

	<nav class="grid gap-4 mt-6">
		{#each posts as post}
			<a
				href="/admin/edit/{post.slug}"
				class="p-4 text-neutral-500 dark:text-neutral-400 bg-neutral-200/50 dark:bg-neutral-800/50 border border-neutral-200/60 dark:border-neutral-700/20 rounded-2xl capitalize overflow-hidden text-ellipsis hover:text-black dark:hover:text-white transition-colors"
			>
				{post.title}
			</a>
		{/each}
	</nav>
</aside>
