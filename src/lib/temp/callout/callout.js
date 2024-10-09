import { containerFactory } from '../../utilities/container-factory';

const callout = (config) => {
	const { iconName, title, paragraph, id, className } = config;

	const calloutAttributes = {
		id: id,
		class: `callout ${className}`
	};
	const iconAttributes = {
		'data-lucide': iconName
	};
	const titleProps = {
		text: title
	};
	const paragraphProps = {
		text: paragraph
	};

	const callout = containerFactory('div', calloutAttributes);
	const icon = containerFactory('i', iconAttributes);
	callout.appendChild(icon);

	if (title) {
		const titleText = containerFactory('b', null, titleProps);
		callout.appendChild(titleText);
	}

	const paragraphText = containerFactory('p', null, paragraphProps);
	callout.appendChild(paragraphText);

	callout.style.height = 'auto';

	return callout;
};

export { callout };
