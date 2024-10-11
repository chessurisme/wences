import { createIcons, Grid, Heart } from 'lucide';
import { Avatar } from '../lib/components/avatar';

function initializeApp() {
	const avatar = Avatar({
		accessibility: {
			role: 'img'
		},
		attribute: {
			src: '../../assets/favicons/android-chrome-512x512.png'
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
		Grid,
		Heart
	}
});
