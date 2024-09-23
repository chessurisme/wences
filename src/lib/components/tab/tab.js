import './tab.css';
import { BaseComponent } from '../base-component/base-component';
import { verifyConfig } from './utilities/verify-config';
import { addIndex } from './utilities/add-index';
import { manageIndex } from './utilities/manage-index';

const Tab = (config) => {
	if (!verifyConfig(config)) return;

	const { attribute, content } = config;

	if (!content.type) {
		content.type = 'float';
	}

	if (content.type === 'float') {
		attribute.class = `wences-tab-float ${attribute.class || ''}`.trim();
	}

	if (content.type === 'footer') {
		attribute.class = `wences-tab-footer ${attribute.class || ''}`.trim();
	}

	const unindexedTab = BaseComponent(config, 'div');
	const tab = addIndex(unindexedTab, content);
	manageIndex(tab);

	return tab;
};

export { Tab };
