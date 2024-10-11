function manageConfig(node, config) {
	const { attribute } = config;
	const { title, alt } = attribute;

	node.classList.add('wences-avatar');

	if (!title) {
		node.title = 'Avatar';
	}

	if (!alt) {
		node.alt = 'Avatar';
	}

	return node;
}

export { manageConfig };
