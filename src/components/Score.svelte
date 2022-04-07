<script>
  import Info from './Info.svelte';
  import Button from './Button.svelte';
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  const handleRestart = () => dispatch('restart');
  const handleNewGame = () => dispatch('new');

  export let time = '00:00';
  export let steps = 0;
</script>

<div class="modal">
  <div class="modal__window">
    <div class="modal__header">You did it!</div>
    <div class="modal__describe">Game over! Here's how you got on...</div>
    <div class="modal__result">
      <Info title="Time Elapsed" style="margin-bottom: 10px" data={time} smallTitle={true} />
      <Info title="Moves Taken" data={steps} smallTitle={true} movesText={true} />
    </div>
    <div class="modal__button">
      <Button name="Restart" style="margin-bottom: 10px" type="secondary" on:customClick={handleRestart} />
      <Button name="Setup New Game" style="color: var(--color-dark)" on:customClick={handleNewGame} />
    </div>
  </div>
</div>

<style>
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.55);
  }

  .modal__window {
    display: flex;
    flex-direction: column;
    padding: 30px 20px;
    background: var(--color-light);
    border-radius: 10px;
  }

  .modal__header {
    margin-bottom: 8px;
    font-size: 1.4rem;
    text-align: center;
  }
  .modal__describe {
    margin-bottom: 20px;
    padding: 0 20px;
    color: var(--color-text);
    font-size: 0.8rem;
    text-align: center;
  }
  .modal__result {
    margin-bottom: 20px;
  }
</style>
