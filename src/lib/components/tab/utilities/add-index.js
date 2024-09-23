function addIndex(element, content) {
	if (content.elements.length === 0) {
		content.index = undefined;
	}

	if (!content.index) {
		content.index = 0;
	}

	if (element.children[content.index]) {
		element.children[content.index].classList.add('wences-tab-active');
	} else {
		element.children[0].classList.add('wences-tab-active');
	}

	return element;
}

export { addIndex };
