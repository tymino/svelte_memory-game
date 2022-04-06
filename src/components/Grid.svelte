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
    justify-content: center;
    align-items: center;
  }

  .row {
    display: flex;
    flex-direction: row;
  }
  .row:not(:last-child) {
    margin-bottom: 10px;
  }

  .cell {
    width: 64px;
    height: 64px;
    padding: 12px;
    background: var(--color-primary);
    border-radius: 50%;
  }
  .cell:not(:last-child) {
    margin-right: 10px;
  }

  @media screen and (max-width: 400px) {
    .cell {
      width: 50px;
      height: 50px;
      padding: 10px;
    }
  }
</style>
