import { Container } from '../container';
import { verifyContent } from './verify-content';
import { manageContent } from './manage-content';

const Chip = (config) => {
	if (!verifyContent(config.content)) return;

	const node = Container(config, 'span');
	const chip = manageContent(node, config.content);

	return chip;
};

export { Chip };
