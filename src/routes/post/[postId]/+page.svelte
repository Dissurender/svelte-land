<script>
  /** @type {import('./$types').PageData} */
  export let data;
  const { post } = data;
</script>

<h1><a href={post.url} referrerpolicy="no-referrer">{post.title}</a></h1>
<h3>{post.by}</h3>
<p>{post.score}</p>
