<script>
  import '../app.css';
</script>

<nav class="navbar bg-neutral text-neutral-content text-lg">
  <a href="/" class="link link-hover mx-2">Home</a>
  <a href="/posts" data-sveltekit-prefetch class="link link-hover mx-4">Posts</a
  >
</nav>

<slot />
