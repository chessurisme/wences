import { ToggleList } from '../lib/components/list/toggle';

function initializeApp() {
	const list = ToggleList({
		attribute: {
			class: 'list'
		},
		content: {
			name: 'jelly',
			checkIndex: [1],
			type: 'checkbox',
			items: ['apple', 'pear', 'grapes', 'date']
		}
	});

	const elements = [list];

	elements.forEach((element) => {
		document.body.appendChild(element);
	});
}

initializeApp();
