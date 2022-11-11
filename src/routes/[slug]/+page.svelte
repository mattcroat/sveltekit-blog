<script lang="ts">
	import type { PageServerData } from './$types'

	export let data: PageServerData

	$: ({ html } = data)
</script>

<main class="prose">
	{@html html}
</main>

<style global>
	.prose {
		display: grid;
		grid-template-columns: 1fr 40px 60ch 40px 1fr;
		margin-inline: auto;
		gap: var(--size-6);
	}

	.prose > * {
		grid-column: 3;
	}

	.prose h1,
	.prose h2 {
		margin-top: var(--size-8);
	}

	.prose ol,
	.prose ul {
		padding: 0;
		list-style-position: inside;
	}

	.prose p {
		color: var(--gray-5);
	}
</style>
