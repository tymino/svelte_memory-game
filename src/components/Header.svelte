<script>
  import Logo from './Logo.svelte';
  import Button from './Button.svelte';

  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  const handleRestart = () => dispatch('restart');
  const handleNewGame = () => dispatch('new');
  const open = () => dispatch('new');
</script>

<header>
  <Logo darked={true} />

  <div class="buttons">
    <Button name="Restart" type="secondary" on:customClick={handleRestart} />
    <Button name="New Game" style="color: var(--color-dark)" on:customClick={handleNewGame} />
  </div>
</header>

<style>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 800px;
  }

  .buttons {
    display: flex;
    min-width: 280px;
  }

  @media screen and (max-width: 475px) {
    .buttons {
      min-width: 180px;
    }
  }
</style>
