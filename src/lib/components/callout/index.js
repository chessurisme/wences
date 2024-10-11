import { verifyContent } from './verify-content';
import { Container } from '../container';
import { manageContent } from './manage-content';

const Callout = (config) => {
	if (!verifyContent(config.content)) return;

	const node = Container(config, 'section');
	const callout = (() => {
		node.classList.add('wences-callout');
		return manageContent(node, config.content);
	})();
	return callout;
};

export { Callout };
