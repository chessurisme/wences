import { roundedSquareButton } from './button-rounded-square';
import { slabButton } from './button-slab';

const button = (config) => {
	const { type, id, className, text, iconName, events } = config;

	if (type === 'slab') {
		const attributes = { id, className, iconName };
		const props = { text };
		return slabButton(attributes, props, events);
	}

	if (type === 'rounded-square') {
		const attributes = { id, className, iconName };
		return roundedSquareButton(attributes, events);
	}

	return console.error('400: No `type` included in config for button.');
};

export { button };
