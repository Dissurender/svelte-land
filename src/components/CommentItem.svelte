<script>
  export let comment;
</script>

<div class="card w-5/6 mx-auto mb-4 bg-neutral shadow-lg rounded-md">
  <div class="card-body">
    <h2 class="card-title">
      {comment.by}
    </h2>
    <span>{comment.id}</span>
    <span>Score: {comment.score}</span>
    <p>{@html comment.text}</p>
  </div>
</div>
