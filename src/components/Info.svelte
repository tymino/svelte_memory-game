<script>
  export let title = 'none';
  export let smallTitle = false;
  export let movesText = false;
  export let data = 'none';
  export let style = '';

  const setTextValue = (value) => {
    if (movesText) {
      return value >= 2 ? `${value} Moves` : value;
    }

    return value;
  };
</script>

<div class="block" {style}>
  <div class="block__title" class:smallTitle>{title}</div>
  <div class="block__data" class:movesText>{setTextValue(data)}</div>
</div>

<style>
  .block {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 10px;
    background: var(--color-light-dark);
    border-radius: 6px;
  }

  .block__title {
    color: var(--color-text);
  }
  .block__data {
    color: var(--color-dark);
  }

  .smallTitle {
    font-size: 0.74rem;
  }

  @media screen and (max-width: 475px) {
    .block {
      flex-direction: column;
      width: 100%;
    }
    .block__title {
      margin-bottom: 4px;
    }
  }
</style>
