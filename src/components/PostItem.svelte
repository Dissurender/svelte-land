<script>
  export let post;
</script>

<div class="card w-1/2 mx-auto mb-4 bg-neutral shadow-lg rounded-md">
  <div class="card-body">
    <h2 class="card-title">
      <a href={post.url}>
        {post.title}
      </a>
    </h2>
    <span>Score: {post.score}</span>
    <a href="http://localhost:8080/post/{post.id}" class="btn btn-active rounded-md"
      >Comments</a
    >
  </div>
</div>
