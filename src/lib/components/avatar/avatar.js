import './avatar.css';
import { BaseComponent } from '../base-component/base-component';

const Avatar = (config) => {
	const { attribute, content } = config;

	const className = `wences-avatar`;
	attribute.class = `${className} ${attribute.class || ''}`.trim();

	const avatar = BaseComponent(config);

	if (content.src) {
		const image = document.createElement('img');
		image.src = content.src;
		avatar.appendChild(image);
	}

	return avatar;
};

export { Avatar };
