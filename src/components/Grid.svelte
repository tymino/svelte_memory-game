<script>
  import Icon from './Icon.svelte';
  import { gameSettings, gridIcon, gridVisible } from '../store';

  // $: console.log($gridIcon);
</script>

<div class="grid">
  {#each $gridVisible as row, rowIndex}
    <div class="row">
      {#each row as cell, cellIndex}
        <div class="cell">
          {#if $gameSettings[0].active === 'Numbers'}
            {cell}
          {:else}
            <Icon index={$gridIcon[rowIndex][cellIndex]} />
          {/if}
        </div>
      {/each}
    </div>
  {/each}
</div>

<style>
  .grid {
    display: flex;
    flex-direction: column;
  }

  .row {
    display: flex;
    flex-direction: row;
  }
  .cell {
    width: 60px;
    height: 60px;
    background: var(--color-dark);
  }
</style>
