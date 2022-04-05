<script>
  import { iconDB } from '../store';

  export let index;
</script>

<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" x="0" y="0">
  {@html $iconDB[index - 1]}
</svg>
