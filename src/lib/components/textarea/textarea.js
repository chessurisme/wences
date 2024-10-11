import { Container } from '../container';

const Textarea = (config) => {
	const { attribute } = config;

	const className = 'wences-textarea';
	attribute.class = `${className} ${attribute.class || ''}`.trim();
	const textarea = BaseComponent(config, 'textarea');

	textarea.addEventListener('input', (event) => {
		textarea.style.height = 'auto';

		const scrollHeight = event.target.scrollHeight + 2;

		textarea.style.height = `${scrollHeight}px`;
	});

	return textarea;
};

export { Textarea };
