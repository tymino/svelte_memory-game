import { writable, readable } from 'svelte/store';

export const isGameRun = writable(false);
export const gameSettings = writable([
  { id: 'theme', name: 'Select theme', active: 'Icons', pool: ['Numbers', 'Icons'] },
  { id: 'grid', name: 'Grid size', active: '4x4', pool: ['4x4', '6x6'] },
]);

export const gridIcon = writable([]);
export const gridVisible = writable([]);

export const iconDB = readable([
  `<path d="M27,17.999c0-7-5-17-5-17s-4.185,2.395-7.979,6.035C11.755,5.753,10,4.999,10,4.999s-5,6-5,13
c0,5.523,3.477,10,9,10h4C23.523,27.999,27,23.522,27,17.999z M16,25.999c-2.209,0-4-1.722-4-3.846c0-2.547,4-6.154,4-6.154
s4,3.607,4,6.154C20,24.277,18.209,25.999,16,25.999z M26.986,23.044l1.789-0.413l0.449,1.949l-3.673,0.848
C26.122,24.719,26.604,23.92,26.986,23.044z M23.529,27.317l5.696,1.314l-0.449,1.949l-8.254-1.905
C21.618,28.395,22.629,27.937,23.529,27.317z M6.448,25.428l-3.673-0.848l0.449-1.949l1.789,0.413
C5.396,23.92,5.878,24.719,6.448,25.428z M8.471,27.317c0.9,0.62,1.911,1.078,3.008,1.359l-8.254,1.905l-0.449-1.949L8.471,27.317z"
/>`,
  `<path d="M10,6l6,2l-6,2l-2,6l-2-6L0,8l6-2l2-6L10,6z M6,22l-1,3l-3,1l3,1l1,3l1-3l3-1l-3-1L6,22z M26,2
l-1,3l-3,1l3,1l1,3l1-3l3-1l-3-1L26,2z M20,8l-3,9l-9,3l9,3l3,9l4-9l8-3l-9-3L20,8z"/>`,
  `<path d="M28.641,17.863l-3.698,0.991L20,16l4.943-2.854l3.698,0.991c0.533,0.143,1.082-0.174,1.225-0.707
l0.518-1.932c0.143-0.533-0.174-1.082-0.707-1.225L27.11,9.586l0.688-2.567c0.143-0.533-0.174-1.082-0.707-1.225l-1.932-0.518
c-0.533-0.143-1.082,0.174-1.225,0.707l-0.991,3.698L18,12.536V6.828l2.707-2.707c0.39-0.391,0.39-1.024,0-1.414l-1.414-1.414
c-0.39-0.39-1.024-0.391-1.414,0L16,3.171l-1.879-1.878c-0.391-0.39-1.024-0.39-1.414,0l-1.414,1.414
c-0.391,0.391-0.391,1.024,0,1.414L14,6.828v5.708L9.057,9.682L8.066,5.984C7.923,5.45,7.375,5.134,6.841,5.277L4.91,5.794
C4.376,5.937,4.06,6.486,4.203,7.019L4.89,9.586l-2.566,0.688c-0.533,0.143-0.85,0.691-0.707,1.225l0.518,1.932
c0.143,0.533,0.691,0.85,1.225,0.707l3.698-0.991L12,16l-4.943,2.854l-3.698-0.991c-0.533-0.143-1.082,0.174-1.225,0.707
l-0.518,1.932c-0.143,0.533,0.174,1.082,0.707,1.225l2.566,0.688l-0.688,2.567c-0.143,0.533,0.174,1.082,0.707,1.225l1.932,0.518
c0.533,0.143,1.082-0.174,1.225-0.707l0.991-3.698L14,19.464v5.708l-2.707,2.707c-0.39,0.391-0.39,1.024,0,1.414l1.414,1.414
c0.39,0.39,1.024,0.391,1.414,0L16,28.829l1.879,1.878c0.391,0.39,1.024,0.39,1.414,0l1.414-1.414c0.391-0.391,0.391-1.024,0-1.414
L18,25.172v-5.708l4.943,2.854l0.991,3.698c0.143,0.533,0.691,0.85,1.225,0.707l1.932-0.518c0.533-0.143,0.85-0.691,0.707-1.225
l-0.688-2.567l2.566-0.688c0.533-0.143,0.85-0.691,0.707-1.225l-0.518-1.932C29.723,18.036,29.174,17.72,28.641,17.863z"/>`,
  `<path d="M10,27h4c0,1.105-0.895,2-2,2S10,28.105,10,27z M23,29c1.105,0,2-0.895,2-2h-4
C21,28.105,21.895,29,23,29z M30,9H6.819l-1-5H2v2h2.181l4,20H26v-2H9.819l-0.6-3H26L30,9z"/>`,
  `<path d="M21,11v-1h-2v1h-6v-1h-2v1h-1L6,22v6h1v1h2v-1h14v1h2v-1h1v-6l-4-11H21z M16,25
c-3.314,0-6-2.686-6-6s2.686-6,6-6s6,2.686,6,6S19.314,25,16,25z M16,14c-2.757,0-5,2.243-5,5s2.243,5,5,5s5-2.243,5-5
S18.757,14,16,14z M16,22c-1.657,0-3-1.343-3-3s1.343-3,3-3s3,1.343,3,3S17.657,22,16,22z M8,12l-7,1v-1l7-1V12z M8,10l-7,1
c0-2,1-4,2-5s6-3,13-3s12,2,13,3s2,3,2,5l-7-1c-1-2-4-2-8-2C12,8,9,8,8,10z M24,11l7,1v1l-7-1V11z"/>`,
  `<path d="M26,17c0,0.551-0.449,1-1,1s-1-0.449-1-1s0.449-1,1-1S26,16.449,26,17z M20,17c-0.551,0-1,0.449-1,1
s0.449,1,1,1s1-0.449,1-1S20.551,17,20,17z M9,12H7v2H5v2h2v2h2v-2h2v-2H9V12z M20,12c-0.551,0-1,0.449-1,1s0.449,1,1,1s1-0.449,1-1
S20.551,12,20,12z M25,11c-0.551,0-1,0.449-1,1s0.449,1,1,1s1-0.449,1-1S25.551,11,25,11z M32,20c0,3.86-3.14,7-7,7
c-2.714,0-5.17-1.581-6.319-4h-5.363C12.17,25.419,9.714,27,7,27c-3.86,0-7-3.14-7-7c0-0.521,0.063-1.058,0.188-1.59l2.128-9.259
C3.124,6.668,5.408,5,8,5c1.713,0,3.308,0.723,4.449,2h7.102C20.692,5.723,22.287,5,24,5c2.592,0,4.876,1.668,5.684,4.151
l2.127,9.255C31.937,18.942,32,19.479,32,20z M12,14c0-0.552-0.448-1-1-1h-1v-1c0-0.552-0.448-1-1-1H7c-0.552,0-1,0.448-1,1v1H5
c-0.552,0-1,0.448-1,1v2c0,0.552,0.448,1,1,1h1v1c0,0.552,0.448,1,1,1h2c0.552,0,1-0.448,1-1v-1h1c0.552,0,1-0.448,1-1V14z M22,18
c0-1.105-0.895-2-2-2s-2,0.895-2,2c0,1.105,0.895,2,2,2S22,19.105,22,18z M22,13c0-1.105-0.895-2-2-2s-2,0.895-2,2
c0,1.105,0.895,2,2,2S22,14.105,22,13z M27,17c0-1.105-0.895-2-2-2s-2,0.895-2,2c0,1.105,0.895,2,2,2S27,18.105,27,17z M27,12
c0-1.105-0.895-2-2-2s-2,0.895-2,2c0,1.105,0.895,2,2,2S27,13.105,27,12z"/>`,
  `<path d="M27.638,19.158c-0.511-1.022-1.54-1.658-2.683-1.658h-0.98c-0.048-0.782-0.208-1.532-0.465-2.237
l1.996-0.499c0.851-0.214,1.564-0.786,1.956-1.569l2.486-4.972c0.124-0.247,0.023-0.547-0.224-0.671s-0.547-0.022-0.671,0.224
l-2.486,4.972c-0.261,0.522-0.737,0.903-1.304,1.046l-2.158,0.539c-0.249-0.481-0.542-0.934-0.879-1.352l2.061-2.061
c0.444-0.444,0.734-1.007,0.838-1.628l0.868-5.21c0.045-0.272-0.139-0.53-0.411-0.575c-0.272-0.048-0.53,0.138-0.575,0.411
l-0.868,5.21c-0.069,0.413-0.262,0.789-0.559,1.085l-2.032,2.032c-0.922-0.889-2.056-1.557-3.32-1.924C19.297,9.603,20,8.384,20,7
c0-2.209-1.791-4-4-4s-4,1.791-4,4c0,1.384,0.703,2.603,1.771,3.321c-1.264,0.366-2.398,1.034-3.32,1.924L8.42,10.213
C8.124,9.917,7.931,9.541,7.861,9.128l-0.868-5.21C6.948,3.645,6.69,3.46,6.418,3.507C6.146,3.552,5.961,3.81,6.007,4.082
l0.868,5.21c0.104,0.621,0.394,1.184,0.838,1.628l2.061,2.061c-0.337,0.418-0.631,0.871-0.879,1.352l-2.158-0.539
c-0.567-0.143-1.043-0.523-1.304-1.046L2.947,7.776C2.823,7.53,2.524,7.429,2.276,7.553C2.029,7.677,1.929,7.977,2.053,8.224
l2.486,4.972c0.392,0.783,1.104,1.355,1.956,1.569l1.996,0.499c-0.257,0.705-0.417,1.455-0.465,2.237h-0.98
c-1.144,0-2.172,0.636-2.683,1.658l-2.309,4.618c-0.124,0.247-0.023,0.547,0.224,0.671C2.348,24.483,2.424,24.5,2.5,24.5
c0.184,0,0.36-0.102,0.448-0.276l2.309-4.618C5.597,18.924,6.283,18.5,7.045,18.5h0.98c0.055,0.882,0.247,1.725,0.564,2.506
l-1.653,1.102c-0.552,0.368-0.972,0.917-1.182,1.547l-1.729,5.187c-0.087,0.262,0.054,0.545,0.316,0.633
C4.395,29.492,4.448,29.5,4.5,29.5c0.209,0,0.404-0.133,0.474-0.342l1.729-5.187c0.141-0.42,0.42-0.786,0.789-1.031l1.537-1.025
C10.399,24.352,13.005,26,16,26s5.601-1.648,6.972-4.084l1.537,1.025c0.368,0.245,0.648,0.611,0.789,1.031l1.729,5.187
c0.07,0.209,0.265,0.342,0.474,0.342c0.052,0,0.105-0.008,0.158-0.025c0.262-0.088,0.403-0.371,0.316-0.633l-1.729-5.187
c-0.21-0.63-0.63-1.179-1.182-1.547l-1.653-1.102c0.317-0.781,0.509-1.625,0.564-2.506h0.98c0.762,0,1.448,0.424,1.789,1.105
l2.309,4.618c0.088,0.175,0.264,0.276,0.448,0.276c0.075,0,0.151-0.017,0.223-0.053c0.247-0.124,0.347-0.424,0.224-0.671
L27.638,19.158z"/>`,
  `<path d="M14,10c0-1.105,0.895-2,2-2s2,0.895,2,2c0,1.105-0.895,2-2,2S14,11.105,14,10z M16,25
c-1.105,0-2,0.895-2,2c0,2,2,4,2,4s2-2,2-4C18,25.895,17.105,25,16,25z M9.406,20C8.427,21.832,9,25,9,25l4-2l1,1h4l1-1l4,2
c0,0,0.573-3.168-0.406-5H9.406z M9.406,19C9.406,19,8,14.787,8,12c0-6.627,8-11,8-11s8,4.373,8,11c0,2.787-1.406,7-1.406,7H9.406z
M13,10c0,1.657,1.343,3,3,3s3-1.343,3-3s-1.343-3-3-3S13,8.343,13,10z"/>`,
  `<path d="M16,2C8.268,2,2,8.268,2,16s6.268,14,14,14s14-6.268,14-14S23.732,2,16,2z M28.503,16.5h-7.476
c0.127,3.298,1.479,6.283,3.623,8.509c0.192,0.199,0.176,0.52-0.028,0.707c-0.003,0.003-0.006,0.005-0.009,0.008
c-0.201,0.183-0.511,0.169-0.7-0.027c-2.31-2.403-3.76-5.63-3.887-9.196H16.5v12.003c0,0.275-0.223,0.497-0.497,0.497h-0.005
c-0.275,0-0.497-0.223-0.497-0.497V16.5h-3.526c-0.127,3.566-1.577,6.793-3.887,9.196c-0.189,0.196-0.498,0.211-0.7,0.027
c-0.003-0.003-0.006-0.005-0.009-0.008c-0.204-0.186-0.22-0.508-0.028-0.707c2.145-2.226,3.496-5.211,3.623-8.509H3.497
C3.223,16.5,3,16.277,3,16.003v-0.005C3,15.723,3.223,15.5,3.497,15.5h7.476c-0.127-3.298-1.479-6.283-3.623-8.509
c-0.192-0.199-0.176-0.52,0.028-0.707c0.003-0.003,0.006-0.005,0.009-0.008c0.201-0.183,0.511-0.169,0.7,0.027
c2.31,2.403,3.76,5.63,3.887,9.196H15.5V3.497C15.5,3.223,15.723,3,15.997,3h0.005C16.277,3,16.5,3.223,16.5,3.497V15.5h3.526
c0.127-3.566,1.577-6.793,3.887-9.196c0.189-0.196,0.498-0.211,0.7-0.027c0.003,0.003,0.006,0.005,0.009,0.008
c0.204,0.186,0.22,0.508,0.028,0.707c-2.145,2.226-3.496,5.211-3.623,8.509h7.476c0.275,0,0.497,0.223,0.497,0.497v0.005
C29,16.277,28.777,16.5,28.503,16.5z"/>`,
  `<path d="M16.537,17h0.425c3.332,0,6.034-2.699,6.037-6.031l0.001-0.934c0-0.02,0.016-0.035,0.036-0.036
  c2.896-0.02,5.207-2.503,4.944-5.459C27.747,1.921,25.383,0,22.753,0H9C6.239,0,4,2.239,4,5s2.239,5,5,5h0v0.962
  C9,14.297,11.703,17,15.037,17h0.425c0.021,0,0.037,0.017,0.037,0.037v1.925c0,0.021-0.017,0.037-0.037,0.037h-1.425
  c-0.573,0-1.037,0.464-1.037,1.037v0.926C13,20.983,12.984,21,12.963,21h-0.926C10.36,21,9,22.36,9,24.037v4.925
  C9,28.983,8.983,29,8.963,29H8.037C7.464,29,7,29.464,7,30.037v0.925C7,31.536,7.464,32,8.037,32h15.925
  C24.536,32,25,31.536,25,30.963v-0.925C25,29.464,24.536,29,23.963,29h-0.925C23.017,29,23,28.983,23,28.963v-4.925
  C23,22.36,21.64,21,19.963,21h-0.926C19.016,21,19,20.983,19,20.963v-0.926c0-0.573-0.464-1.037-1.037-1.037h-1.425
  c-0.021,0-0.037-0.017-0.037-0.037v-1.925C16.5,17.017,16.517,17,16.537,17z M23,2c1.657,0,3,1.343,3,3s-1.343,3-3,3V2z M9,8
  C7.343,8,6,6.657,6,5s1.343-3,3-3V8z M19.963,23C20.536,23,21,23.464,21,24.037v2.925C21,27.536,20.536,28,19.963,28h-7.925
  C11.464,28,11,27.536,11,26.963v-2.925C11,23.464,11.464,23,12.037,23H19.963z"/>
<path d="M12,24.037v2.925C12,26.983,12.017,27,12.037,27h7.925C19.983,27,20,26.983,20,26.963v-2.925
  C20,24.017,19.983,24,19.963,24h-7.925C12.017,24,12,24.017,12,24.037z"/>`,
  `<path d="M13,26.008l-0.938,2.062c-0.415,0.914-1.275,1.466-2.266,1.466c-0.046,0-0.094-0.001-0.141-0.004
c-1.049-0.055-1.908-0.708-2.24-1.706l-2.494-7.482c-0.272-0.816-0.181-1.71,0.251-2.454c0.432-0.744,1.163-1.268,2.006-1.436
l3.843-0.769l-5.939-0.54c-1.187-0.108-2.198-0.908-2.575-2.039L0.684,7.632C0.478,7.015,0.578,6.358,0.958,5.831S1.93,5,2.581,5
c1.35,0,2.675,0.465,3.73,1.308L13,11.659V26.008z M31.042,5.831C30.661,5.303,30.07,5,29.419,5c-1.35,0-2.675,0.465-3.73,1.308
L19,11.659v14.349l0.937,2.062c0.415,0.914,1.275,1.466,2.266,1.466c0.046,0,0.094-0.001,0.141-0.004
c1.049-0.055,1.908-0.708,2.24-1.706l2.494-7.482c0.272-0.816,0.181-1.71-0.251-2.454c-0.432-0.744-1.163-1.268-2.006-1.436
l-3.843-0.769l5.939-0.54c1.187-0.108,2.198-0.908,2.574-2.039l1.825-5.475C31.522,7.015,31.422,6.358,31.042,5.831z M18,11
c0-0.709-0.371-1.328-0.927-1.683l0.535-1.874c0.27-0.944,0.958-1.666,1.889-1.979c0.929-0.314,1.915-0.155,2.702,0.435
c0.222,0.166,0.535,0.122,0.7-0.1c0.166-0.221,0.121-0.534-0.1-0.7c-1.037-0.778-2.39-0.997-3.62-0.583
c-1.229,0.414-2.176,1.405-2.532,2.652l-0.527,1.844C16.079,9.01,16.041,9,16,9s-0.079,0.01-0.119,0.012l-0.527-1.844
c-0.356-1.247-1.303-2.238-2.532-2.652c-1.23-0.415-2.583-0.196-3.62,0.583c-0.221,0.166-0.266,0.479-0.1,0.7
c0.166,0.221,0.479,0.265,0.7,0.1c0.787-0.59,1.771-0.748,2.702-0.435c0.931,0.313,1.62,1.034,1.889,1.979l0.535,1.874
C14.371,9.672,14,10.291,14,11v14c0,1.105,0.895,2,2,2c1.105,0,2-0.895,2-2V11z"/>`,
  `<path d="M30.146,28.561l-1.586,1.586c-0.292,0.292-0.676,0.438-1.061,0.438s-0.768-0.146-1.061-0.438
l-4.293-4.293l-2.232,2.232c-0.391,0.391-0.902,0.586-1.414,0.586s-1.024-0.195-1.414-0.586l-0.172-0.172
c-0.781-0.781-0.781-2.047,0-2.828l8.172-8.172c0.391-0.391,0.902-0.586,1.414-0.586s1.024,0.195,1.414,0.586l0.172,0.172
c0.781,0.781,0.781,2.047,0,2.828l-2.232,2.232l4.293,4.293C30.731,27.024,30.731,27.976,30.146,28.561z M22.341,18.244
l-4.097,4.097L3.479,13.656C2.567,13.12,2,12.128,2,11.07V3c0-0.551,0.449-1,1-1h8.07c1.058,0,2.049,0.567,2.586,1.479
L22.341,18.244z M19.354,19.354c0.195-0.195,0.195-0.512,0-0.707l-15.5-15.5c-0.195-0.195-0.512-0.195-0.707,0s-0.195,0.512,0,0.707
l15.5,15.5C18.744,19.451,18.872,19.5,19,19.5S19.256,19.451,19.354,19.354z"/>`,
  `<path d="M29.898,16h-0.454L25.55,8.99C25.802,8.964,26,8.759,26,8.5C26,8.224,25.776,8,25.5,8h-9V7.929
C17.361,7.706,18,6.931,18,6c0-1.105-0.895-2-2-2s-2,0.895-2,2c0,0.931,0.639,1.706,1.5,1.929V8h-9C6.224,8,6,8.224,6,8.5
c0,0.259,0.198,0.464,0.45,0.49L2.556,16H2.102c-0.612,0-1.108,0.551-0.991,1.152C1.648,19.914,4.08,22,7,22s5.352-2.086,5.89-4.848
C13.006,16.551,12.511,16,11.898,16h-0.454L7.556,9h7.394l-0.9,18H10.5c-0.276,0-0.5,0.224-0.5,0.5s0.224,0.5,0.5,0.5h11
c0.276,0,0.5-0.224,0.5-0.5S21.776,27,21.5,27h-3.55l-0.9-18h7.394l-3.889,7h-0.454c-0.612,0-1.108,0.551-0.991,1.152
C19.648,19.914,22.08,22,25,22s5.352-2.086,5.89-4.848C31.006,16.551,30.511,16,29.898,16z M10.3,16H3.7L7,10.059L10.3,16z M15,6
c0-0.551,0.449-1,1-1s1,0.449,1,1s-0.449,1-1,1S15,6.551,15,6z M25,10.059L28.3,16H21.7L25,10.059z"/>`,
  `<path d="M10.841,29.103C11.357,29.63,12,30.285,12,31.5c0,0.276-0.224,0.5-0.5,0.5S11,31.776,11,31.5
c0-0.807-0.385-1.199-0.873-1.697C9.599,29.264,9,28.652,9,27.5c0-1.146,0.593-1.738,1.115-2.261
c0.082-0.082,0.158-0.16,0.233-0.239h1.244c-0.227,0.383-0.51,0.687-0.77,0.947C10.363,26.406,10,26.769,10,27.5
C10,28.244,10.371,28.623,10.841,29.103z M9,8C8.449,8,8,8.449,8,9s0.449,1,1,1s1-0.449,1-1S9.551,8,9,8z M21.652,21h-1.244
c0.227,0.383,0.51,0.687,0.77,0.947C21.637,22.406,22,22.769,22,23.5c0,0.744-0.371,1.123-0.841,1.603
C20.643,25.63,20,26.285,20,27.5c0,0.276,0.224,0.5,0.5,0.5s0.5-0.224,0.5-0.5c0-0.807,0.385-1.199,0.873-1.697
C22.401,25.264,23,24.652,23,23.5c0-1.146-0.593-1.738-1.115-2.261C21.803,21.158,21.726,21.079,21.652,21z M20.5,0
c-2.763,0-4.853,1.251-6.116,3.479C17.907,4.713,20,8.315,20,13.5c0,1.601-0.361,3.063-0.967,4.299l-0.431,0.646
c-0.205,0.308-0.224,0.701-0.049,1.026C18.727,19.798,19.065,20,19.434,20h2.132c0.369,0,0.707-0.202,0.881-0.528
c0.174-0.325,0.156-0.719-0.049-1.026l-0.431-0.646C25.051,16.996,28,13.863,28,9.5C28,3.552,25.196,0,20.5,0z M19,13.5
c0,1.437-0.364,2.854-0.912,3.964c-1.108,2.25-3.082,3.804-5.121,4.335l0.431,0.646c0.205,0.308,0.224,0.701,0.049,1.026
C13.273,23.798,12.935,24,12.566,24h-2.132c-0.369,0-0.707-0.202-0.881-0.528c-0.174-0.325-0.156-0.719,0.049-1.026l0.431-0.646
C6.949,20.996,4,17.863,4,13.5C4,7.552,6.804,4,11.5,4c0.833,0,1.6,0.121,2.309,0.337C17.407,5.421,19,9.104,19,13.5z M11,9
c0-1.105-0.895-2-2-2C7.895,7,7,7.895,7,9s0.895,2,2,2C10.105,11,11,10.105,11,9z"/>`,
  `<path d="M23.994,15.945l-0.756,1.613C22.897,17.83,22.47,18,22,18c-1.103,0-2-0.897-2-2s0.897-2,2-2
C23.084,14,23.965,14.868,23.994,15.945z M15,9c-1.103,0-2,0.897-2,2s0.897,2,2,2s2-0.897,2-2S16.103,9,15,9z M27.007,9.518
l-2.376,5.069C24.125,13.647,23.143,13,22,13c-1.657,0-3,1.343-3,3s1.343,3,3,3c0.202,0,0.399-0.021,0.59-0.06l-4.779,10.196
c-0.36,0.767-1.085,1.151-1.811,1.151s-1.451-0.384-1.811-1.151l-2.419-5.16C11.848,23.983,11.921,24,12,24c1.657,0,3-1.343,3-3
s-1.343-3-3-3c-1.008,0-1.895,0.501-2.439,1.264L4.993,9.518C7.864,6.788,11.735,5.1,16,5.1S24.136,6.788,27.007,9.518z M18,11
c0-1.657-1.343-3-3-3s-3,1.343-3,3s1.343,3,3,3S18,12.657,18,11z M4.546,8.564C7.569,5.8,11.581,4.1,16,4.1s8.431,1.7,11.454,4.464
l0.314-0.669c0.646-1.377,0.157-3.017-1.13-3.828C23.557,2.125,19.911,1,16,1S8.443,2.125,5.362,4.067
c-1.287,0.811-1.775,2.451-1.13,3.828L4.546,8.564z M14,21c0-1.103-0.897-2-2-2c-0.896,0-1.648,0.597-1.901,1.411l1.143,2.438
C11.476,22.945,11.731,23,12,23C13.103,23,14,22.103,14,21z"/>`,
  `<path d="M9.004,10.002c0.203,0,0.411-0.063,0.596-0.202l3.404-2.553C13.931,8.525,16.041,11,18.5,11
c1.758,0,3.34-1.267,4.438-2.457c1.067-1.156,1.067-2.93,0-4.087C21.84,3.267,20.258,2,18.5,2c-2.459,0-4.569,2.474-5.496,3.753
L9.6,3.2C9.415,3.061,9.207,2.998,9.004,2.998C8.486,2.998,8,3.408,8,4v5C8,9.592,8.486,10.002,9.004,10.002z M20,5
c0.552,0,1,0.448,1,1c0,0.552-0.448,1-1,1s-1-0.448-1-1C19,5.448,19.448,5,20,5z M28.938,14.457C27.84,13.267,26.258,12,24.5,12
c-2.459,0-4.569,2.474-5.496,3.753L15.6,13.2c-0.185-0.139-0.393-0.202-0.596-0.202C14.486,12.998,14,13.408,14,14v5
c0,0.592,0.486,1.002,1.004,1.002c0.203,0,0.411-0.063,0.596-0.202l3.404-2.553C19.931,18.525,22.041,21,24.5,21
c1.758,0,3.34-1.267,4.438-2.457C30.004,17.387,30.004,15.613,28.938,14.457z M25.738,17c-0.552,0-1-0.448-1-1c0-0.552,0.448-1,1-1
s1,0.448,1,1C26.738,16.552,26.29,17,25.738,17z M12.5,21c-2.459,0-4.569,2.474-5.496,3.753L3.6,22.2
c-0.185-0.139-0.393-0.202-0.596-0.202C2.486,21.998,2,22.408,2,23v5c0,0.592,0.486,1.002,1.004,1.002
c0.203,0,0.411-0.063,0.596-0.202l3.404-2.553C7.931,27.525,10.041,30,12.5,30c1.758,0,3.34-1.267,4.438-2.457
c1.067-1.156,1.067-2.93,0-4.087C15.84,22.267,14.258,21,12.5,21z M14,26c-0.552,0-1-0.448-1-1c0-0.552,0.448-1,1-1s1,0.448,1,1
C15,25.552,14.552,26,14,26z"/>`,
  `<path d="M7,10c0,0.551-0.449,1-1,1s-1-0.449-1-1s0.449-1,1-1S7,9.449,7,10z M31.001,12.091
c-0.098,6.394-7.298,11.235-11.808,13.644c-1.028,0.549-2.148,1.072-2.852,1.388c-0.22,0.099-0.461,0.099-0.681,0
c-0.704-0.317-1.825-0.84-2.852-1.389C8.289,23.322,1.074,18.47,0.999,12.061C0.949,7.826,4.676,4.065,8.91,4.015
c0.032,0,0.064-0.001,0.096-0.001c1.974,0,3.804,0.731,5.215,1.949c0.195,0.168,0.309,0.412,0.332,0.668L14.68,8.09
c0.023,0.264,0.15,0.508,0.353,0.679l1.083,0.909c0.423,0.355,0.478,0.986,0.123,1.409l-2.351,2.801
c-0.355,0.423-0.3,1.054,0.123,1.409l2.801,2.351c0.423,0.355,0.478,0.986,0.123,1.409l-2.351,2.801
c-0.355,0.423-0.3,1.054,0.123,1.409l1.301,1.091c0.166,0.139,0.411,0.132,0.568-0.017l0,0c0.164-0.155,0.179-0.412,0.034-0.585
l-0.489-0.585c-0.354-0.423-0.298-1.052,0.124-1.407l2.799-2.353c0.422-0.354,0.477-0.983,0.124-1.406l-2.347-2.813
c-0.353-0.424-0.297-1.054,0.127-1.407l2.826-2.361c0.427-0.357,0.481-0.993,0.12-1.417l-1.313-1.539
c-0.175-0.205-0.259-0.471-0.235-0.738l0.166-1.854c0.028-0.315,0.197-0.607,0.47-0.767c1.186-0.695,2.557-1.095,4.01-1.095
c0.904,0,1.841,0.153,2.766,0.482C28.92,5.617,31.052,8.739,31.001,12.091z M8,10c0-1.105-0.895-2-2-2c-1.105,0-2,0.895-2,2
s0.895,2,2,2C7.105,12,8,11.104,8,10z"/>`,
  `<path d="M29.855,2.852L29.855,2.852L30,2.707C30.195,2.512,30.195,2.195,30,2s-0.512-0.195-0.707,0l-0.145,0.145
l0,0C28.286,1.44,27.2,1,26,1c-0.928,0-1.797,0.253-2.542,0.693c-0.562,0.332-0.655,1.11-0.193,1.571l2.382,2.382l-0.824,0.824
C22.503,4.323,19.41,3,16,3S9.497,4.323,7.178,6.471L6.354,5.646l2.382-2.382c0.462-0.462,0.369-1.239-0.193-1.571
C7.797,1.253,6.928,1,6,1C4.8,1,3.714,1.44,2.852,2.145l0,0L2.707,2C2.512,1.805,2.195,1.805,2,2S1.805,2.512,2,2.707l0.145,0.145
l0,0C1.44,3.714,1,4.8,1,6c0,0.928,0.253,1.797,0.693,2.542c0.333,0.562,1.11,0.655,1.571,0.193l2.382-2.382l0.824,0.824
C4.323,9.497,3,12.59,3,16c0,3.335,1.267,6.367,3.331,8.669l-2.347,2.347c-0.567,0.567-0.643,1.491-0.114,2.093
c0.3,0.342,0.715,0.513,1.129,0.513c0.384,0,0.768-0.146,1.061-0.439l2.517-2.517C10.683,28.133,13.239,29,16,29
s5.317-0.867,7.422-2.335l2.517,2.517c0.293,0.293,0.677,0.439,1.061,0.439c0.415,0,0.829-0.171,1.129-0.513
c0.529-0.602,0.453-1.527-0.114-2.093l-2.347-2.347C27.733,22.367,29,19.335,29,16c0-3.41-1.323-6.503-3.471-8.822l0.824-0.824
l2.382,2.382c0.462,0.462,1.239,0.369,1.571-0.193C30.747,7.797,31,6.928,31,6C31,4.8,30.56,3.714,29.855,2.852z M27,16
c0,6.075-4.925,11-11,11S5,22.075,5,16S9.925,5,16,5S27,9.925,27,16z M16,6C10.477,6,6,10.477,6,16c0,5.523,4.477,10,10,10
s10-4.477,10-10C26,10.477,21.523,6,16,6z M19.5,17h-4c-0.276,0-0.5-0.224-0.5-0.5v-6c0-0.276,0.224-0.5,0.5-0.5h0
c0.276,0,0.5,0.224,0.5,0.5V16h3.5c0.276,0,0.5,0.224,0.5,0.5l0,0C20,16.776,19.776,17,19.5,17z"/>`,
]);
