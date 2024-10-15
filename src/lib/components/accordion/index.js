import { Container } from '../container';
import { verifyContent } from './verify-content';
import { manageContent } from './manage-content';

const Accordion = (config) => {
	if (!verifyContent(config.content)) return;

	const node = Container(config, 'section');
	const accordion = manageContent(node, config.content);

	return accordion;
};

export { Accordion };
