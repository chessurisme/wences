import { verifyConfig } from './verify-config';
import { manageConfig } from './manage-config';

const NonToggleList = (config) => {
	if (!verifyConfig(config)) return;

	const nontoggleList = manageConfig(config);
	return nontoggleList;
};

export { NonToggleList };
