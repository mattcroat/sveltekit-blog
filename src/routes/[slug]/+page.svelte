<script lang="ts">
	import Seo from '$lib/components/seo.svelte'
	import type { PageServerData } from './$types'

	export let data: PageServerData

	$: ({ html, meta } = data)
</script>

<Seo {meta} />

<main class="prose">
	{@html html}
</main>

<style lang="postcss" global>
	@import 'highlight.js/styles/base16/material.css';

	.prose {
		@media (--sm) {
			max-width: 60ch;
			margin-top: var(--space-7);
			margin-inline: auto;
		}

		& pre {
			border-radius: var(--round-1);
		}

		& code {
			font-size: var(--fs-1);
		}

		& h1 {
			margin-bottom: var(--space-7);
			text-align: center;
		}

		& a {
			text-decoration: underline;
			transition: color 0.3s ease;

			&:hover {
				color: var(--clr-brand);
			}
		}
	}
</style>
