<script>
  import Icon from './components/Icon.svelte';
  import Button from './components/Button.svelte';

</script>

<main>
  <h1>Hello name!</h1>

  <!-- <div class="wrapper">
    <Icon index="0" />
  </div> -->

	<br>
	<div class="wrapper">
		<Button type='active' name='1' />
		<Button type='primary' style='color: var(--color-dark)' />
		<Button type='secondary' />
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
		width: 400px;
		height: 400px;
    border: 1px solid black;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }
</style>
