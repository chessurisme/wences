import { containerFactory } from '../../utilities/container-factory';

const modal = (config) => {
	const { id, className, iconName, text, elements } = config;

	const modalAttributes = {
		id: id,
		class: `modal ${className}`
	};
	const modalProps = {
		text: text
	};
	const iconAttributes = {
		'data-lucide': iconName
	};

	const modal = containerFactory('div', modalAttributes, modalProps);
	const icon = containerFactory('i', iconAttributes);
	modal.appendChild(icon);

	elements.forEach((element) => {
		modal.appendChild(element);
	});

	return modal;
};

export { modal };
