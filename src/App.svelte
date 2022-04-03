<script>
  import Menu from './components/Menu.svelte';
  import Game from './components/Game.svelte';

  import { isGameRun } from './store';
</script>

{#if $isGameRun}
  <Game />
{:else}
  <Menu />
{/if}
