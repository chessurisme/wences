import '../lib/styles/root.css';
import '../lib/styles/body.css';
import {
	Apple,
	ChevronLeft,
	ChevronRight,
	createIcons,
	Grape,
	Menu,
	Play,
	Plus
} from 'lucide';
import { Button } from '../lib/components/button/button';
import { Tab } from '../lib/components/tab/tab';

document.body.appendChild(
	Tab({
		attribute: {
			class: 'home-main',
			id: 'love'
		},
		content: {
			type: 'float',
			index: 2,
			elements: [
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
						icon: 'apple',
						text: 'Apple'
					}
				}),
				Button({
					attribute: {
						class: ' fruit',
						id: 'orange'
					},
					behavior: {
						onclick: () => console.log('Hi, I am an orange!')
					},
					style: {
						backgroundColor: '#eaeaea'
					},
					state: {
						disabled: false
					},
					content: {
						icon: 'menu',
						text: 'Menu'
					}
				}),
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
						icon: 'grape',
						text: 'Grapes'
					}
				}),
				Button({
					attribute: {
						class: ' fruit',
						id: 'orange'
					},
					behavior: {
						onclick: () => console.log('Hi, I am an orange!')
					},
					style: {
						backgroundColor: '#eaeaea'
					},
					state: {
						disabled: false
					},
					content: {
						icon: 'play',
						text: 'Play'
					}
				})
			]
		}
	})
);

document.body.appendChild(
	Tab({
		attribute: {
			class: 'home-main',
			id: 'love'
		},
		content: {
			type: 'float',
			index: 2,
			elements: [
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
				}),
				Button({
					attribute: {
						class: ' fruit',
						id: 'orange'
					},
					behavior: {
						onclick: () => console.log('Hi, I am an orange!')
					},
					style: {
						backgroundColor: '#eaeaea'
					},
					state: {
						disabled: false
					},
					content: {
						icon: 'menu'
					}
				}),
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
						icon: 'grape'
					}
				}),
				Button({
					attribute: {
						class: ' fruit',
						id: 'orange'
					},
					behavior: {
						onclick: () => console.log('Hi, I am an orange!')
					},
					style: {
						backgroundColor: '#eaeaea'
					},
					state: {
						disabled: false
					},
					content: {
						icon: 'play'
					}
				})
			]
		}
	})
);

document.body.appendChild(
	Tab({
		attribute: {
			class: 'home-main',
			id: 'envy'
		},
		content: {
			type: 'float',
			index: 1,
			elements: [
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
						text: 'Apple'
					}
				}),
				Button({
					attribute: {
						class: ' fruit',
						id: 'orange'
					},
					behavior: {
						onclick: () => console.log('Hi, I am an orange!')
					},
					style: {
						backgroundColor: '#eaeaea'
					},
					state: {
						disabled: false
					},
					content: {
						text: 'Menu'
					}
				}),
				Button({
					attribute: {
						class: ' fruit',
						id: 'orange'
					},
					behavior: {
						onclick: () => console.log('Hi, I am an orange!')
					},
					style: {
						backgroundColor: '#eaeaea'
					},
					state: {
						disabled: false
					},
					content: {
						text: 'Preview'
					}
				}),
				Button({
					attribute: {
						class: ' fruit',
						id: 'orange'
					},
					behavior: {
						onclick: () => console.log('Hi, I am an orange!')
					},
					style: {
						backgroundColor: '#eaeaea'
					},
					state: {
						disabled: false
					},
					content: {
						text: 'Example'
					}
				}),
				Button({
					attribute: {
						class: ' fruit',
						id: 'orange'
					},
					behavior: {
						onclick: () => console.log('Hi, I am an orange!')
					},
					style: {
						backgroundColor: '#eaeaea'
					},
					state: {
						disabled: false
					},
					content: {
						text: 'Courses'
					}
				}),
				Button({
					attribute: {
						class: ' fruit',
						id: 'orange'
					},
					behavior: {
						onclick: () => console.log('Hi, I am an orange!')
					},
					style: {
						backgroundColor: '#eaeaea'
					},
					state: {
						disabled: false
					},
					content: {
						text: 'Neuron'
					}
				}),
				Button({
					attribute: {
						class: ' fruit',
						id: 'orange'
					},
					behavior: {
						onclick: () => console.log('Hi, I am an orange!')
					},
					style: {
						backgroundColor: '#eaeaea'
					},
					state: {
						disabled: false
					},
					content: {
						text: 'Bookmarks'
					}
				})
			]
		}
	})
);

document.body.appendChild(
	Tab({
		attribute: {
			class: 'home-main',
			id: 'hate'
		},
		content: {
			type: 'footer',
			index: 3,
			elements: [
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
						icon: 'apple',
						text: 'Apple'
					}
				}),
				Button({
					attribute: {
						class: ' fruit',
						id: 'orange'
					},
					behavior: {
						onclick: () => console.log('Hi, I am an orange!')
					},
					style: {
						backgroundColor: '#eaeaea'
					},
					state: {
						disabled: false
					},
					content: {
						icon: 'menu',
						text: 'Menu'
					}
				}),
				Button({
					attribute: {
						class: ' fruit',
						id: 'orange'
					},
					behavior: {
						onclick: () => console.log('Hi, I am an orange!')
					},
					style: {
						backgroundColor: '#eaeaea'
					},
					state: {
						disabled: false
					},
					content: {
						icon: 'play',
						text: 'Play'
					}
				})
			]
		}
	})
);

createIcons({
	icons: {
		Apple,
		Grape,
		Menu,
		Play,
		Plus,
		ChevronLeft,
		ChevronRight
	}
});
