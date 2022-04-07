<script>
  import { createEventDispatcher } from 'svelte';

  // primary, secondary, active, default
  export let type = 'primary';
  export let style = '';
  export let id = '';
  export let name = 'none';

  const dispatch = createEventDispatcher();
  const handleClick = () => dispatch('customClick', { id, name });
</script>

<button class={type} {style} on:click={handleClick}>{name}</button>

<style>
  button {
    width: 100%;
    height: 40px;
    border: none;
    border-radius: 20px;
    color: var(--color-light);
    font-family: var(--font-family);
    font-size: 1rem;
  }
  button:not(.active) {
    cursor: pointer;
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
  .primary:hover {
    background: var(--color-primary-hover);
  }
  .secondary {
    background: var(--color-secondary);
  }
  .secondary:hover {
    background: var(--color-secondary-hover);
  }

  @media screen and (max-width: 475px) {
    button {
      font-size: 0.8rem;
    }
    button:not(:last-child) {
      margin-right: 10px;
    }
  }
</style>
