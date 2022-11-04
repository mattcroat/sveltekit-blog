<script lang="ts">
	const postsResponse = fetch('/api/posts').then((response) => response.json())
</script>

<h2>Posts</h2>

{#await postsResponse}
	<p>Loading posts...</p>
{:then posts}
	<pre>
    {JSON.stringify(posts, null, 2)}
  </pre>
{:catch error}
	<p>{error.message}</p>
{/await}
