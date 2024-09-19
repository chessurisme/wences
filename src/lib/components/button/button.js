import './button.css';
import { BaseComponent } from '../base-component/base-component';

const Button = (config) => {
	if (!verifyButtonConfig(config)) return;

	const button = formatConfig(config);

	return button;
};

function verifyButtonConfig(config) {
	const { content } = config;

	if (content.elements) {
		console.error('Buttons cannot have elements.');
		return false;
	}

	if (!content.text && !content.icon) {
		console.error(
			'Buttons cannot be empty. It must have text or icon or both.'
		);
		return false;
	}

	return true;
}

function formatConfig(config) {
	const { attribute, content } = config;

	const className = getClass(content);
	attribute.class = `${className} ${attribute.class || ''}`.trim();
	const button = BaseComponent(config, 'button');

	return button;
}

function getClass(content) {
	if (content.text && content.icon) {
		return 'wences-button-text-and-icon';
	}

	if (content.text && !content.icon) {
		return 'wences-button-text-only';
	}

	if (!content.text && content.icon) {
		return 'wences-button-icon-only';
	}
}

export { Button };
