<script>
  // primary, secondary, active, default
  export let type = 'primary';
  export let name = 'none';
</script>

<button class={type}>{name}</button>

<style>
  button {
    width: 100%;
    height: 40px;
  }
  button:not(:last-child) {
    margin-right: 20px;
  }
  .primary {
    background: red;
  }
  .secondary {
    background: blue;
  }
</style>
