import './button.css';
import { BaseComponent } from '../base-component/base-component';
import { verifyConfig } from './utilities/verify-config';
import { getClass } from './utilities/get-class';

const Button = (config) => {
	if (!verifyConfig(config)) return;

	const { attribute, content } = config;

	const className = getClass(content);
	attribute.class = `${className} ${attribute.class || ''}`.trim();
	content.elements = [];
	const button = BaseComponent(config, 'button');

	return button;
};

export { Button };
