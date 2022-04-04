<script>
  export let title = 'none';
  export let data = 'none';
</script>

<div class="block">
  <div class="block__title">{title}</div>
  <div class="block__data">{data}</div>
</div>

<style>
  .block {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-grow: 1;
    padding: 10px;
    background: var(--color-primary);
    border-radius: 4px;
  }
  .block:not(:last-child) {
    margin-right: 10%;
  }

  .block__title {
    color: var(--color-text);
  }
  .block__data {
    color: var(--color-dark);
  }
</style>
