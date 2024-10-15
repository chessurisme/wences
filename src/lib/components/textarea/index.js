import { Container } from '../container';

const Textarea = (config) => {
	const textarea = (() => {
		const node = Container(config, 'textarea');
		return node;
	})();

	textarea.addEventListener('input', (event) => {
		textarea.dataset.wences = 'textarea';
		textarea.style.height = 'auto';
		const scrollHeight = event.target.scrollHeight + 2;
		textarea.style.height = `${scrollHeight}px`;
	});

	return textarea;
};

export { Textarea };
