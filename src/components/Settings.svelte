<script>
  import Button from './Button.svelte';

  import { isGameRun, gameSettings } from '../store';

  const handleSwitchSetting = (event) => {
    gameSettings.update((settings) => {
      return settings.map((obj) => {
        if (obj.id === event.detail.id) {
          return { ...obj, active: event.detail.name };
        }
        return obj;
      });
    });
  };

  const handleStartGame = () => {
    isGameRun.set(true);
  }
</script>

<div class="settings">
  {#each $gameSettings as option (option.id)}
    <div class="option">
      <div class="option__name">{option.name}</div>
      <div class="option__buttons">
        {#each option.pool as title (title)}
          {#if option.active === title}
            <Button id={option.id} name={title} type="active" />
          {:else}
            <Button id={option.id} name={title} on:customClick={handleSwitchSetting} />
          {/if}
        {/each}
      </div>
    </div>
  {/each}

  <Button name='Start Game' type="secondary" on:customClick={handleStartGame} />
</div>

<style>
  .settings {
    margin-top: 60px;
    padding: 40px;
    background: var(--color-light);
    border-radius: 10px;
  }
  .option:not(:last-child) {
    margin-bottom: 28px;
  }
  .option__name {
    margin-bottom: 12px;
  }
  .option__buttons {
    display: flex;
    min-width: 320px;
  }
</style>
