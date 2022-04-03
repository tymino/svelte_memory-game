<script>
  export let darked;
  let title = 'memory';
</script>

<h1 class:darked>{title}</h1>

<style>
  h1 {
    color: var(--color-light);
    font-size: 2rem;
  }

  .darked {
    color: var(--color-dark);
  }
</style>
