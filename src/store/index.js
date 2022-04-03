import { writable } from 'svelte/store';

const isGameRun = writable(false);

const gameSettings = writable([
  { id: 'theme', name: 'Select theme', active: 'Numbers', pool: ['Numbers', 'Icons'] },
  { id: 'grid', name: 'Grid size', active: '6x6', pool: ['4x4', '6x6'] },
]);

export { isGameRun, gameSettings };
