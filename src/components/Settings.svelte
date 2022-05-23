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
  };
</script>

<div class="settings">
  {#each $gameSettings as option (option.id)}
    <div class="option">
      <div class="option__name">{option.name}</div>
      <div class="option__buttons">
        {#each option.pool as title (title)}
          {#if option.active === title}
            <div class="option__buttons--wrapper">
              <Button id={option.id} name={title} type="active" />
            </div>
          {:else}
            <div class="option__buttons--wrapper">
              <Button
                id={option.id}
                name={title}
                on:customClick={handleSwitchSetting}
              />
            </div>
          {/if}
        {/each}
      </div>
    </div>
  {/each}

  <Button name="Start Game" type="secondary" on:customClick={handleStartGame} />
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
    color: var(--color-text);
    font-size: 0.9rem;
  }
  .option__buttons {
    display: flex;
    min-width: 320px;
  }
  .option__buttons--wrapper {
    width: 100%;
  }

  @media screen and (max-width: 475px) {
    .settings {
      padding: 20px;
    }
    .option:not(:last-child) {
      margin-bottom: 28px;
    }
    .option__name {
      text-align: center;
    }
    .option__buttons {
      display: flex;
      flex-direction: column;
      width: 100%;
      min-width: 200px;
    }

    .option__buttons--wrapper:not(:last-child) {
      margin-bottom: 10px;
    }
  }
</style>
