import '../lib/styles/root.css';
import '../lib/styles/body.css';
import { Apple, createIcons, Grape, Menu, Play } from 'lucide';
import { Button } from '../lib/components/button/button';

const button = Button({
	attribute: {
		class: ' fruit',
		id: 'pineapple'
	},
	behavior: {
		click: () => console.log('Hi, I am a pineapple!')
	},
	content: {
		text: 'Pineapple'
	},
	style: {
		background: 'orange'
	}
});

document.body.appendChild(
	Button({
		attribute: {
			class: ' fruit',
			id: 'apple'
		},
		behavior: {
			onclick: () => console.log('Hi, I am an apple!')
		},
		style: {
			backgroundColor: '#eaeaea'
		},
		state: {
			disabled: false
		},
		content: {
			icon: 'apple'
		}
	})
);

document.body.appendChild(
	Button({
		attribute: {
			class: ' fruit',
			id: 'grape',
			title: 'Grape'
		},
		behavior: {
			click: () => console.log('Hi, I am grapes!')
		},
		content: {
			icon: 'grape',
			text: 'Grape'
		},
		style: {
			background: '#eaeaea'
		}
	})
);

document.body.appendChild(
	Button({
		attribute: {
			class: ' fruit',
			id: 'pineapple'
		},
		behavior: {
			click: () => console.log('Hi, I am a pineapple!')
		},
		content: {
			text: 'Play Pineapple'
		},
		style: {
			background: '#eaeaea'
		}
	})
);

createIcons({
	icons: {
		Apple,
		Grape,
		Menu,
		Play
	}
});
