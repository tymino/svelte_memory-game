<script>
  import Logo from './Logo.svelte';
  import Settings from './Settings.svelte';
</script>

<main class="menu">
  <Logo darked={false} />
  <Settings />
</main>

<style>
  .menu {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: var(--color-dark);
  }
</style>
