<div class="container">
	<h1>About</h1>

	<p>
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia similique
		maiores expedita mollitia ab deleniti autem, eveniet sint reprehenderit
		earum obcaecati deserunt inventore, quis enim! Dolores saepe beatae quos
		reiciendis?
	</p>

	<p>
		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia, nam.
		Debitis, similique eum nihil ipsum, itaque eveniet, dignissimos repudiandae
		aspernatur id quisquam pariatur! Dolores id perferendis quos! Ad, aliquam
		voluptas.
	</p>
</div>

<svelte:head>
	<title>About</title>
</svelte:head>

<style lang="postcss">
	.container {
		--padding-block: var(--space-4);

		@media (--sm) {
			--padding-block: var(--space-7);
		}
	}

	h1 + * {
		margin-top: var(--space-2);
	}

	p {
		max-width: 60ch;
		color: var(--clr-text-muted);
	}
</style>
