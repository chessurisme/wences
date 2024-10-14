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
			items: [
				'pastry',
				'bread',
				'sweets',
				'vegetables',
				{
					content: 'fruits',
					list: ToggleList({
						attribute: {
							class: 'list'
						},
						content: {
							name: 'fruits',
							checkIndex: [],
							type: 'checkbox',
							items: [
								'strawberry',
								'pomelo',
								{
									content: 'orange',
									list: ToggleList({
										attribute: {
											class: 'list'
										},
										content: {
											name: 'fruits',
											checkIndex: [],
											type: 'checkbox',
											items: [
												'tangelo',
												'tangerine',
												{
													content: 'clementine',
													list: ToggleList({
														attribute: { class: 'okay' },
														content: {
															name: 'perfect',
															checkIndex: [2],
															type: 'radio',
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
