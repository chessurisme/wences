import './avatar.css';
import { verifyConfig } from './avatar-verify-config';
import { modifyConfig } from './avatar-modify-config';
import { BaseComponent } from '../base-component';

const Avatar = (config) => {
	if (!verifyConfig(config)) return;

	const modifiedConfig = modifyConfig(config);
	const avatar = BaseComponent(modifiedConfig, 'img');

	return avatar;
};

export { Avatar };
