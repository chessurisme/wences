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
		border: '2px solid black',
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
			backgroundColor: 'tomato',
			border: 'black 2px solid'
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
			border: '2px solid black',
			background: 'pink'
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
			text: 'Pineapple'
		},
		style: {
			border: '2px solid black',
			background: 'orange'
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
