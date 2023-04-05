<script>
  export let post;
</script>

<div class="card w-1/2 mx-auto mb-4 bg-neutral shadow-lg rounded-md">
  <div class="card-body">
    <h2 class="card-title">
      {post.title}
    </h2>
    <span>Score: {post.score}</span>
    <a
      href="http://localhost:5173/post/{post.id}"
      class="btn btn-active rounded-md">Comments</a
    >
  </div>
</div>
