import { Container } from '../container';
import { verifyContent } from './verify-content';
import { manageContent } from './manage-content';

const Badge = (config) => {
	if (verifyContent(config.content)) return;

	const node = Container(config, 'span');
	const badge = manageContent(node, config.content);

	return badge;
};

export { Badge };
