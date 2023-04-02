<script>
  import PostItem from '../../../components/PostItem.svelte';

  /** @type {import('./$types').PageData} */
  export let data;
  const { posts } = data;
</script>

<ul class="container flex justify-center mx-auto my-2">
  <li class="my-2"><a href="#">Best</a></li>
  <li class="my-2 mx-6"><a href="#">New</a></li>
  <li class="my-2"><a href="http://localhost:8080/posts/top">Top</a></li>
</ul>

{#each posts as post}
  <PostItem {post} />
{/each}
