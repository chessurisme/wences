import { BaseComponent } from '../base-component';

const Button = (config) => {
	if (!verifyConfig(config)) return;

	config.attribute.class = `wences-button ${config.attribute.class}`.trim();

	const node = BaseComponent(config, 'button');
	const button = manageContent(node, config.content);

	return button;
};

export { Button };
