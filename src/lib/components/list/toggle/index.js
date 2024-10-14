import { verifyConfig } from './verify-config';
import { manageConfig } from './manage-config';

const ToggleList = (config) => {
	if (!verifyConfig(config)) return;

	const toggleList = manageConfig(config);
	return toggleList;
};

export { ToggleList };
