<script>
  import CommentItem from '../../../components/CommentItem.svelte';

  /** @type {import('./$types').PageData} */
  export let data;
  const { post } = data;
  // console.log(post);
</script>

<div class="container w-2/5 min-w-[344px] mx-auto my-4">
  <h1 class=" text-xl font-semibold"><a href={post.url} referrerpolicy="no-referrer">{post.title}</a></h1>
  <h3>By: {post.by}</h3>
  <p>Score: {post.score}</p>
</div>
<div class="divider" />
<section>
  <h3 class="w-1/2 mx-auto mb-4 text-center">Comments</h3>
  {#each post.kids as comment}
    <CommentItem {comment} />
  {/each}
</section>
