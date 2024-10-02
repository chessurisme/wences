const modifyConfig = (config) => {
	const { attribute } = config;

	attribute.class = `wences-avatar ${attribute.class}`.trim();

	if (!attribute.title) {
		attribute.title = 'Avatar';
	}

	if (!attribute.alt) {
		attribute.alt = 'Avatar';
	}

	return config;
};

export { modifyConfig };
