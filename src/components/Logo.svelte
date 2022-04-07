<script>
  export let darked;
  let title = 'memory';
</script>

<div class="logo" class:darked>{title}</div>

<style>
  .logo {
    color: var(--color-light);
    font-size: 2rem;
    padding-bottom: 6px;
  }

  .darked {
    color: var(--color-dark);
  }

  @media screen and (max-width: 475px) {
    .logo {
      font-size: 1.6rem;
    }
  }
</style>
