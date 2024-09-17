import { containerFactory } from '../../utilities/container-factory';

const roundedSquareButton = (attributes, events) => {
	const buttonAttributes = {
		id: attributes.id,
		class: `${attributes.className} button-rounded-square`
	};
	const iconAttributes = {
		'data-lucide': attributes.iconName
	};

	const button = containerFactory('button', buttonAttributes, events);
	const icon = containerFactory('i', iconAttributes);

	button.appendChild(icon);

	return button;
};

export { roundedSquareButton };
