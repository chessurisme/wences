import { verifyContent } from './verify-content';
import { Container } from '../container';
import { manageContent } from './manage-content';

const Modal = (config) => {
	if (!verifyContent(config.content)) return;

	const node = Container(config, 'dialog');
	const modal = manageContent(node, config.content);

	return modal;
};

export { Modal };
