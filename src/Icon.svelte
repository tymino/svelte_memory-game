<script>
  export let name;
  let icons = [
    {
      box: 24,
      name: 'save',
      svg: `<g stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><path d="M17 21v-8H7v8"/><path d="M7 3v5h8"/></g>`,
    },
    {
      box: 32,
      name: 'trash',
      svg: `<path d="M12 12h2v12h-2z" /><path d="M18 12h2v12h-2z" /><path d="M4 6v2h2v20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8h2V6zm4 22V8h16v20z" /><path d="M12 2h8v2h-8z" />`,
    },
    {
      box: 32,
      name: 'man',
      svg: `<path d="M12,5c0-2.209,1.791-4,4-4s4,1.791,4,4s-1.791,4-4,4S12,7.209,12,5z M20.621,10h-9.242
		l-6.439,6.439l2.121,2.121L12,13.621V17h8v-3.379l4.939,4.939l2.121-2.121L20.621,10z M17,23l3-3v-2h-8v2l3,3H17z M13.853,23.268
		l-2.121-2.121L7.879,25l5.061,5.061l2.121-2.121L12.121,25L13.853,23.268z M18.147,23.268L19.879,25l-2.939,2.939l2.121,2.121
		L24.121,25l-3.853-3.853L18.147,23.268z"/>`,
    },
  ];
  let displayIcon = icons.find((e) => e.name === name);
</script>

<svg
  version="1.1"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 32 32"
  x="0"
  y="0">{@html displayIcon.svg}</svg
>
