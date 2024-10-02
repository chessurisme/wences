import { createIcons, Grid } from 'lucide';
import { Avatar } from '../lib/components/avatar/avatar';

function initializeApp() {
	const avatar = Avatar({
		attribute: {
			class: 'apple',
			src: '../../assets/favicons/android-chrome-512x512.png',
			title: 'Avatar'
		},
		behavior: {
			onclick: () => console.log('I am an avatar.')
		}
	});

	const elements = [avatar];

	elements.forEach((element) => {
		document.body.appendChild(element);
	});
}

initializeApp();

createIcons({
	icons: {
		Grid
	}
});
