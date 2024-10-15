import { createIcons, Heart, X } from 'lucide';
import { Chip } from '../lib/components/chip';

function initializeApp() {
	const chip = Chip({
		attributes: {
			class: 'chippable'
		},
		behavior: {
			click: () => console.log('I am not a chip!')
		},
		content: {
			thumbnail: 'heart',
			text: 'I love you!',
			removable: false
		}
	});

	const anotherChip = Chip({
		attributes: {
			class: 'chippable'
		},
		behavior: {
			click: () =>
				console.log(
					'He is indeed a chip! Just denying on its own existence! Pff.'
				)
		},
		content: {
			text: 'I hate you!'
		}
	});

	const elements = [chip, anotherChip];

	elements.forEach((element) => {
		document.body.appendChild(element);
	});
}

initializeApp();

createIcons({
	icons: {
		X,
		Heart
	}
});
