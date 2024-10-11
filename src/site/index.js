import { createIcons, Grid, Heart } from 'lucide';
import { Button } from '../lib/components/button';

function initializeApp() {
	const button = Button({
		accessibility: {
			role: 'button',
			checked: 'true'
		},
		attribute: {
			id: 'main'
		},
		behavior: {
			click: () => console.log('Hey'),
			onmouseover: () => {
				console.log('Grid!');
			}
		},
		content: {
			icon: 'grid',
			text: 'Press me'
		}
	});

	const elements = [button];

	elements.forEach((element) => {
		document.body.appendChild(element);
	});

	button.addEventListener('click', () => {
		let p = button.querySelector('svg');
		p = `<i data-lucide='heart'></i>`;
		createIcons({ icons: { Grid, Heart } });
	});
}

initializeApp();

createIcons({
	icons: {
		Grid,
		Heart
	}
});
