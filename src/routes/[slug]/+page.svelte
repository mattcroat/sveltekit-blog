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
		max-width: fit-content;
		margin-inline: auto;
		gap: var(--size-6);
	}

	.prose h1,
	.prose h2 {
		margin-top: var(--size-8);
		text-transform: capitalize;
	}

	.prose ol,
	.prose ul {
		padding: 0;
		list-style-position: inside;
	}

	.prose p {
		color: var(--gray-5);
	}

	.prose pre {
		max-width: 100%;
		padding: var(--size-5);
		border-radius: var(--radius-3);
		background-color: hsl(220 20% 10%);
		color: var(--gray-0);
		font-size: var(--font-size-2);
	}

	.hljs-comment,
	.hljs-quote {
		color: var(--gray-6);
	}

	.hljs-variable,
	.hljs-template-variable,
	.hljs-tag,
	.hljs-name,
	.hljs-selector-id,
	.hljs-selector-class,
	.hljs-regexp,
	.hljs-deletion {
		color: var(--brand);
	}

	.hljs-built_in,
	.hljs-literal,
	.hljs-type,
	.hljs-params,
	.hljs-meta,
	.hljs-link {
		color: var(--red-5);
	}

	.hljs-number {
		color: var(--red-2);
	}

	.hljs-attribute,
	.hljs-attr {
		color: var(--red-2);
	}

	.hljs-string,
	.hljs-symbol,
	.hljs-bullet,
	.hljs-addition {
		color: var(--gray-0);
	}

	.hljs-title,
	.hljs-section,
	.hljs-selector-tag {
		color: var(--red-5);
	}

	.hljs-keyword {
		color: var(--red-2);
	}
</style>
