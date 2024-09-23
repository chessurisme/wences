function getClass(content) {
	if (!content) {
		return '';
	}

	if (content.text && content.icon) {
		return 'wences-button-text-and-icon';
	}

	if (content.text && !content.icon) {
		return 'wences-button-text-only';
	}

	if (!content.text && content.icon) {
		return 'wences-button-icon-only';
	}
}

export { getClass };
