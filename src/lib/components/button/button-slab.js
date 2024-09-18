import { containerFactory } from '../../utilities/container-factory';

const slabButton = (attributes, props, events) => {
	const buttonAttributes = {
		id: attributes.id,
		class: `${attributes.className} button-slab`
	};
	const iconAttributes = {
		'data-lucide': attributes.iconName
	};
	const textProps = {
		text: props.text
	};

	const button = containerFactory('button', buttonAttributes, null, events);

	if (attributes.iconName) {
		const icon = containerFactory('i', iconAttributes);
		button.appendChild(icon);
	}

	const text = containerFactory('p', null, textProps);
	button.appendChild(text);

	return button;
};

export { slabButton };
