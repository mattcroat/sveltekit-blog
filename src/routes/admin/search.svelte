<script lang="ts">
	let searchTerm = ''
	let results = search()

	async function search() {
		const url = `/api/search?term=${searchTerm}`
		const response = await fetch(url, { method: 'GET' })
		return response.json()
	}

	function handleSubmit() {
		results = search()
	}
</script>

<aside>
	<h2>Posts</h2>

	<div class="search">
		<form on:submit|preventDefault={handleSubmit} autocomplete="off">
			<input
				bind:value={searchTerm}
				type="search"
				name="search"
				placeholder="Search"
			/>
		</form>
	</div>

	<div class="results">
		{#await results}
			<div aria-busy="true" />
		{:then results}
			<ul>
				{#each results as result}
					<li>
						<a href="/admin/edit/{result.slug}">
							{result.title}
						</a>
					</li>
				{/each}
			</ul>
		{:catch error}
			<p class="error">{error.message}</p>
		{/await}
	</div>
</aside>

<style lang="postcss">
	aside {
		padding-right: var(--space-6);
	}

	.search {
		margin-top: var(--space-2);
	}

	.results {
		max-height: 400px;
		overflow-y: auto;
		text-transform: capitalize;
	}

	.error {
		color: var(--clr-text-error);
	}
</style>
