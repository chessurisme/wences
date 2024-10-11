import { appendIcon } from '../../utilities/set-content/append-icon';
import { appendText } from '../../utilities/set-content/append-text';

function manageContent(node, content) {
	const { type, icon, title, body } = content;

	if (icon) {
		appendIcon(node, icon);
	}

	if (type !== 'custom') {
		const iconNode = node.querySelector('i');

		if (iconNode) {
			iconNode.remove();
		}

		switch (type) {
			case 'success':
				appendIcon(node, 'circle-check');
				break;
			case 'info':
				appendIcon(node, 'info');
				break;
			case 'warning':
				appendIcon(node, 'triangle-alert');
				break;
			case 'error':
				appendIcon(node, 'circle-x');
				break;
		}
	}

	if (title) {
		appendText(node, title, 'b');
	}

	if (body) {
		appendText(node, body);
	}

	appendIcon(node, 'x');

	return node;
}

export { manageContent };
