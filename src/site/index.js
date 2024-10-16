import { Modal } from '../lib/components/modal';
import { Button } from '../lib/components/button';
import { createIcons, Play, X } from 'lucide';

function initializeApp() {
	const text = document.createElement('p');
	text.textContent = 'See, it works!';

	const anotherText = document.createElement('p');
	anotherText.textContent = 'I see! I see!';

	const button = Button({
		attribute: {
			class: 'testButton',
			id: 'see'
		},
		behavior: {
			click: () => {
				console.log('I meant, yes, it really works!');
			}
		},
		content: {
			text: 'Click me!'
		},
		style: {
			backgroundColor: 'tomato'
		}
	});

	const helperText = document.createElement('p');
	helperText.textContent = 'See the console after you click.';
	helperText.style.fontSize = 'small';
	helperText.style.color = '#3a3a3a';

	const modal = Modal({
		attribute: {
			class: 'myModal',
			id: 'seeItWorks'
		},
		content: {
			removable: true,
			elements: [text, anotherText, button, helperText]
		}
	});

	const showButton = Button({
		attribute: {
			class: 'showModal',
			id: 'insist'
		},
		content: {
			icon: 'play',
			text: 'Show Modal'
		},
		behavior: {
			onclick: () => {
				modal.showModal();
			}
		},
		style: {
			backgroundColor: 'yellow'
		}
	});

	const elements = [modal, showButton];

	elements.forEach((element) => {
		document.body.appendChild(element);
	});
}

initializeApp();

createIcons({
	icons: {
		X,
		Play
	}
});
