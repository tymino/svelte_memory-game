<script>
  import Menu from './components/Menu.svelte';
  import Game from './components/Game.svelte';

  import { isGameRun } from './store';
</script>

<div class="app">
  {#if $isGameRun}
    <Game />
  {:else}
    <Menu />
  {/if}
</div>

<style>
  .app {
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 500px;
    margin: 0 auto;
  }
</style>