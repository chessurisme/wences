import { verifyConfig } from './avatar-verify-config';

const Avatar = (config) => {
	const avatar = createAvatarNode(config);
	return avatar;
};

const createAvatarNode = (config) => {
	if (!verifyConfig(config)) return;
};

export { Avatar };
