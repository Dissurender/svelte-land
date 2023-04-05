<script>
  import CommentItem from '../../../components/CommentItem.svelte';

  /** @type {import('./$types').PageData} */
  export let data;
  const { post } = data;
  // console.log(post);
</script>

<h1><a href={post.url} referrerpolicy="no-referrer">{post.title}</a></h1>
<h3>By: {post.by}</h3>
<p>{post.score}</p>
<div class="divider" />
<section>
  <h3>Comments</h3>
  {#each post.kids as comment}
    <CommentItem {comment} />
  {/each}
</section>
