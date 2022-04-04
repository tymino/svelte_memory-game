<script>
  import Header from './Header.svelte';
  import Grid from './Grid.svelte';

  import Info from './Info.svelte';

  import { onMount } from 'svelte';
  import { isGameRun, gridIcon, gridVisible, iconDB } from '../store';

  let countTime = 0;
  let timeElapsed = '00:00';
  let gameMoves = 0;

  const setupGrid = () => {
    // countTime = 0;
  };

  const gameRestart = () => setupGrid();

  const gameNew = () => {
    isGameRun.set(false);
    gridIcon.set(null);
    gridVisible.set(null);
  };

  const correctTime = (t) => (t < 10 ? `0${t}` : t);

  onMount(() => {
    let timer = setInterval(() => {
      countTime++;

      const minutes = Math.floor(countTime / 60);
      const seconds = Math.floor(countTime % 60);

      timeElapsed = `${correctTime(minutes)}:${correctTime(seconds)}`;
    }, 1000);

    setupGrid();

    return () => clearInterval(timer);
  });
</script>

<main class="container">
  <Header on:restart={gameRestart} on:new={gameNew} />

  <div class="game">
    <Grid />

    <div class="game__info">
      <Info title="Time" data={timeElapsed} />
      <Info title="Moves" data={gameMoves} />
    </div>
  </div>
</main>

<style>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 40px 100px;
  }

  .game {
    margin-top: 60px;
  }

  .game__info {
    display: flex;
    justify-content: space-between;

    width: 500px;
  }
</style>
