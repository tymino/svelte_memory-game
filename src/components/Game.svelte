<script>
  import Header from './Header.svelte';
  import Icon from './Icon.svelte';
  import Info from './Info.svelte';

  import { onMount } from 'svelte';
  import { isGameRun, gameSettings, gridIcon, gridVisible, iconDB } from '../store';

  let countTime = 0;
  let timeElapsed = '00:00';
  let gameMoves = [];

  const setupGrid = () => {
    const size = $gameSettings[1].active.split('x').map((str) => Number(str));
    const totalOfPairs = size.reduce((s, n) => s * n);
    const countOfPair = totalOfPairs / 2;

    const counterOfIndexes = new Map();
    let totalIndexes = 0;

    const row = Array(size[0]).fill(0);
    gridVisible.set(Array(size[1]).fill(row));

    const grid = $gridVisible.map((gridRow) => {
      return gridRow.map((_) => {
        let condition = true;

        while (condition) {
          if (totalIndexes >= totalOfPairs) condition = false;

          const rand = Math.floor(Math.random() * (countOfPair - 1 + 1)) + 1;

          if (!counterOfIndexes.get(rand)) {
            counterOfIndexes.set(rand, 1);
            totalIndexes++;
            condition = false;
            return rand;
          }

          if (counterOfIndexes.get(rand) < 2) {
            counterOfIndexes.set(rand, 2);
            totalIndexes++;
            condition = false;
            return rand;
          }
        }
      });
    });

    gridIcon.set(grid);
  };

  const gameRestart = () => setupGrid();

  const gameNew = () => {
    isGameRun.set(false);
    gridIcon.set(null);
    gridVisible.set(null);
  };

  const correctTime = (t) => (t < 10 ? `0${t}` : t);

  const checkPairs = () => {
    if (gameMoves.length === 2) {
      const [firstMovePosition, secondMovePosition] = gameMoves;

      const firstIcon = $gridIcon[firstMovePosition.x][firstMovePosition.y];
      const secondIcon = $gridIcon[secondMovePosition.x][secondMovePosition.y];

      console.log(firstIcon, secondIcon);
    }
  };

  const handleClickCell = (event) => {
    const cellPosX = Number(event.target.dataset.x);
    const cellPosY = Number(event.target.dataset.y);

    let localGrid = $gridVisible.map((row, rowIndex) => {
      return row.map((col, colIndex) => {
        if (rowIndex === cellPosX && colIndex === cellPosY) {
          gameMoves.push({ x: rowIndex, y: colIndex });
          return -1;
        }

        return col;
      });
    });

    gridVisible.set(localGrid);

    checkPairs();
  };

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
    {#if $gridIcon}
      <div class="grid">
        {#each $gridVisible as row, rowIndex}
          <div class="row">
            {#each row as cell, colIndex}
              <div
                class="cell"
                class:cellHide={!cell}
                class:cellSelected={cell === -1}
                on:click={!cell ? handleClickCell : null}
                data-x={rowIndex}
                data-y={colIndex}
              >
                {#if cell}
                  {#if $gameSettings[0].active === 'Numbers'}
                    {$gridIcon[rowIndex][colIndex]}
                  {:else}
                    <Icon index={$gridIcon[rowIndex][colIndex]} />
                  {/if}
                {/if}
              </div>
            {/each}
          </div>
        {/each}
      </div>
    {/if}
  </div>

  <div class="game__info">
    <Info title="Time" data={timeElapsed} />
    <Info title="Moves" data={gameMoves} />
  </div>
</main>

<style>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 40px 10px 10px;
  }

  .game {
    margin-top: 60px;
    margin-bottom: 60px;
  }

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
    display: flex;
    justify-content: center;
    align-items: center;
    width: 64px;
    height: 64px;
    padding: 12px;
    background: var(--color-primary);
    border-radius: 50%;
    color: var(--color-light);
    font-size: 2.4rem;
    cursor: pointer;
    user-select: none;
  }
  .cell:not(:last-child) {
    margin-right: 10px;
  }

  .cellHide {
    background: var(--color-dark);
  }
  .cellSelected {
    background: var(--color-secondary);
  }

  @media screen and (max-width: 400px) {
    .cell {
      width: 50px;
      height: 50px;
      padding: 10px;
    }
  }

  .game__info {
    display: flex;
    justify-content: space-between;

    width: 500px;
  }
</style>
