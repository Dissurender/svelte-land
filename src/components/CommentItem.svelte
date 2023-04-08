<script>
  export let comment;

  console.log(comment)
</script>

<div class="card w-2/5 min-w-[344px] mx-auto mb-4 bg-neutral shadow-lg rounded-md">
  <div class="card-body">
    <h2 class="card-title">
      {comment.by}
    </h2>
    <div class="divider"></div>
    <!-- <span>{comment.id}</span> -->
    <!-- <span>Score: {comment.score}</span> -->
    <p>{@html comment.text}</p>
  </div>
</div>
