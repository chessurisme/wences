import { appendText } from '../../utilities/set-content/append-text';

function manageContent(node, content) {
	const { type, text } = content;

	node.dataset.wences = 'badge';

	if (type) {
		node.classList.add(`wences-badge-${type}`);
	} else {
		node.classList.add('wences-badge-primary');
	}

	if (text) {
		appendText(node, text);
	}

	return node;
}

export { manageContent };
