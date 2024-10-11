import { verifyConfig } from './verify-config';
import { Container } from '../container';
import { manageConfig } from './manage-config';

const Avatar = (config) => {
	if (!verifyConfig(config)) return;

	const node = Container(config, 'img');
	const avatar = manageConfig(node, config);

	return avatar;
};

export { Avatar };
