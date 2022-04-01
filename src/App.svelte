<script>
  import Icon from './Icon.svelte';

</script>

<main>
  <h1>Hello name!</h1>

  <div class="wrapper">
    <Icon name="man" />
  </div>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
  }

  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
		width: 64px;
		height: 64px;
    border: 1px solid black;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }
</style>
