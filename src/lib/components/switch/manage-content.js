function manageContent(node, content) {
	const { on, off } = content;

	node.addEventListener('click', () => {
		const checkbox = node.querySelector('input');
		checkbox.checked ? on() : off();
	});

	return node;
}

export { manageContent };
