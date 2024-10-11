import { createIcons, Grid, Heart } from 'lucide';
import { SwitchToggle } from '../lib/components/switch';

function initializeApp() {
	const switchToggle = SwitchToggle({
		attribute: {
			class: 'Test'
		},
		content: {
			on: () => console.log('On'),
			off: () => console.log('Off'),
			default: 'on'
		}
	});
	const elements = [switchToggle];

	elements.forEach((element) => {
		document.body.appendChild(element);
	});
}

initializeApp();

createIcons({
	icons: {
		Grid,
		Heart
	}
});
