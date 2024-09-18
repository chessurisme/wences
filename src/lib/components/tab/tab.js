import { containerFactory } from '../../utilities/container-factory';

const tab = (config) => {
	const { id, className, elements } = config;

	const tabAttributes = {
		id: id,
		class: `tab ${className}`
	};

	const tab = containerFactory('div', tabAttributes);

	elements.forEach((element) => {
		tab.appendChild(element);
	});

	return tab;
};

export { tab };
