<script lang="ts">
	type Post = {
		slug: string
		title: string
	}

	export let posts: Post[]
</script>

<aside>
	<h4 class="text-2xl font-semibold">Posts</h4>

	<form method="GET" action="/admin?/search" autocomplete="off">
		<input
			class="w-full mt-6 p-4 bg-neutral-200/40 dark:bg-neutral-700/20 rounded-2xl border border-neutral-200/60 dark:border-neutral-700/20 focus:border-red-400 focus:ring-red-400"
			type="search"
			name="search"
		/>
	</form>

	<nav class="max-h-96 grid gap-4 mt-6 pr-4 overflow-y-auto">
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
