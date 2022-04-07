<script>
  import Header from './Header.svelte';
  import Button from './Button.svelte';
  import Icon from './Icon.svelte';
  import Info from './Info.svelte';

  import { onMount } from 'svelte';
  import { isGameRun, gameSettings, gridIcon, gridVisible, iconDB } from '../store';

  const TIMER_STEP = 100; // ms
  const CELL_HIDE = 0;
  const CELL_STEP = -1;
  const CELL_OPENED = 1;

  const GRID_SIZE = $gameSettings[1].active.split('x').map((char) => Number(char));
  const TOTAL_CELLS = GRID_SIZE.reduce((s, n) => s * n);
  const TOTAL_PAIRS = TOTAL_CELLS / 2;

  let isGameEnd = false;
  let countTime = 0;
  let countOfPlayerSteps = 0;
  let timeElapsed = '00:00';
  let gameMoves = [];
  let blockCellClick = false;
  let animationTime = 0;

  const setupGrid = () => {
    const counterOfIndexes = new Map();

    let totalIndexes = 0;

    const row = Array(GRID_SIZE[0]).fill(CELL_HIDE);
    gridVisible.set(Array(GRID_SIZE[1]).fill(row));

    const grid = $gridVisible.map((gridRow) => {
      return gridRow.map((_) => {
        let condition = true;

        while (condition) {
          if (totalIndexes >= TOTAL_CELLS) condition = false;

          const rand = Math.floor(Math.random() * (TOTAL_PAIRS - 1 + 1)) + 1;

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

  const gameRestart = () => {
    gameMoves = [];
    countOfPlayerSteps = 0;
    countTime = 0;
    isGameEnd = false;

    setupGrid();
  };

  const gameNew = () => {
    isGameRun.set(false);
    gridIcon.set(null);
    gridVisible.set(null);
  };

  const correctTime = (t) => (t < 10 ? `0${t}` : t);

  const clearSteps = (isFull) => {
    animationTime = 0;
    gameMoves = [];
    blockCellClick = false;

    if (isFull) {
      gridVisible.set($gridVisible.map((row) => row.map((cell) => (cell === CELL_STEP ? 0 : cell))));
    }
  };

  const checkEndGame = () => {
    const bool = $gridVisible.flat(1).reduce((sum, cell) => (sum += cell)) === TOTAL_CELLS;

    if (bool) {
      isGameEnd = true;
    }
  };

  const checkPairs = () => {
    if (gameMoves.length === 2) {
      animationTime = 0;

      const [firstMovePosition, secondMovePosition] = gameMoves;

      const firstIcon = $gridIcon[firstMovePosition.x][firstMovePosition.y];
      const secondIcon = $gridIcon[secondMovePosition.x][secondMovePosition.y];

      if (firstIcon === secondIcon) {
        gridVisible.set(
          $gridVisible.map((row) => row.map((cell) => (cell === CELL_STEP ? CELL_OPENED : cell))),
        );

        clearSteps(false);
        checkEndGame();
      } else {
        blockCellClick = true;
      }
    }
  };

  const handleClickCell = (event) => {
    countOfPlayerSteps++;

    const cellPosX = Number(event.target.dataset.x);
    const cellPosY = Number(event.target.dataset.y);

    let localGrid = $gridVisible.map((row, iX) => {
      return row.map((col, iY) => {
        if (iX === cellPosX && iY === cellPosY) {
          gameMoves.push({ x: iX, y: iY });
          return CELL_STEP;
        }

        return col;
      });
    });

    gridVisible.set(localGrid);

    checkPairs();
  };

  onMount(() => {
    let timer = setInterval(() => {
      if (!isGameEnd) {
        countTime += 0.1;
      }

      if (gameMoves.length === 2) {
        animationTime += TIMER_STEP;

        if (animationTime >= 500) {
          clearSteps(true);
        }
      }

      const minutes = Math.floor(countTime / 60);
      const seconds = Math.floor(countTime % 60);

      timeElapsed = `${correctTime(minutes)}:${correctTime(seconds)}`;
    }, TIMER_STEP);

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
                class:cellSelected={cell === CELL_STEP}
                on:click={!cell && !blockCellClick ? handleClickCell : null}
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
    <Info title="Moves" data={countOfPlayerSteps} />
  </div>

  {#if isGameEnd}
    <div class="modal">
      <div class="modal__window">
        <div class="modal__header">You did it!</div>
        <div class="modal__describe">Game over! Here's how you got on...</div>
        <div class="modal__result">
          <Info title="Time Elapsed" style="margin-bottom: 10px" data={timeElapsed} smallTitle={true} />
          <Info title="Moves Taken" data={countOfPlayerSteps} smallTitle={true} movesText={true} />
        </div>
        <div class="modal__button">
          <Button name="Restart" style="margin-bottom: 10px" type="secondary" on:customClick={gameRestart} />
          <Button name="Setup New Game" style="color: var(--color-dark)" on:customClick={gameNew} />
        </div>
      </div>
    </div>
  {/if}
</main>

<style>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 40px 20px 10px;
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
    user-select: none;
  }
  .cell:not(:last-child) {
    margin-right: 10px;
  }

  .cellHide {
    background: var(--color-dark);
    cursor: pointer;
  }
  .cellSelected {
    background: var(--color-secondary);
  }

  .game__info {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 440px;
  }

  .modal {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .55);
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
    font-size: .8rem;
    text-align: center;
  }
  .modal__result {
    margin-bottom: 20px;
  }

  @media screen and (max-width: 475px) {
    .cell {
      width: 50px;
      height: 50px;
      padding: 10px;
    }
  }
</style>
