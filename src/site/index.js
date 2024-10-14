import { ToggleList } from '../lib/components/list/toggle';
import { NonToggleList } from '../lib/components/list/non-toggle';

function initializeApp() {
	const list = NonToggleList({
		attribute: {
			class: 'list'
		},
		content: {
			name: 'jelly',
			checkIndex: [1],
			type: 'alphabet',
			case: 'upper',
			items: [
				'pastry',
				'bread',
				'sweets',
				'vegetables',
				{
					content: 'fruits',
					list: NonToggleList({
						attribute: {
							class: 'list'
						},
						content: {
							name: 'fruits',
							checkIndex: [],
							type: 'square',
							items: [
								'strawberry',
								'pomelo',
								{
									content: 'orange',
									list: NonToggleList({
										attribute: {
											class: 'list'
										},
										content: {
											name: 'fruits',
											checkIndex: [],
											type: 'circle',
											items: [
												'tangelo',
												'tangerine',
												{
													content: 'clementine',
													list: NonToggleList({
														attribute: { class: 'okay' },
														content: {
															name: 'perfect',
															checkIndex: [2],
															type: 'disc',
															items: [
																'Algerian',
																'Nules',
																'Fina',
																'Clementine di Calabria',
																'Clementine del Golfo di Taranto'
															]
														}
													})
												}
											]
										}
									})
								}
							]
						}
					})
				}
			]
		}
	});

	const elements = [list];

	elements.forEach((element) => {
		document.body.appendChild(element);
	});
}

initializeApp();
