<script>
  // primary, secondary, active, default
  export let type = 'primary';
  export let name = 'none';
  export let style = '';
</script>

<button class={type} {style}>{name}</button>

<style>
  button {
    width: 100%;
    height: 40px;
    border: none;
    border-radius: 20px;
    color: var(--color-light);
  }
  button:not(:last-child) {
    margin-right: 20px;
  }
  .active {
    background: var(--color-dark);
  }
  .primary {
    background: var(--color-primary);
  }
  .secondary {
    background: var(--color-secondary);
  }
</style>
