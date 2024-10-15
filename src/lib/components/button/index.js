import { verifyContent } from './verify-content';
import { Container } from '../container';
import { manageContent } from './manage-content';

const Button = (config) => {
	if (!verifyContent(config.content)) return;

	const node = Container(config, 'button');
	const button = (() => {
		node.dataset.wences = 'button';
		return manageContent(node, config.content);
	})();

	return button;
};

export { Button };
