import 'typeface-righteous';
import 'typeface-oswald';
import { bulma } from '@theme-ui/presets';
export default {
	...bulma,
	colors: {
		...bulma.colors,
		white: '#fff',
		background: '#2F2A2A', // '#f9fcff',
		primary: 'black'
	},
	fonts: {
    body: 'Oswald, system-ui, sans-serif',
    heading: 'Righteous, cursive',
    monospace: '"Roboto Mono", monospace',
  },
};
