import { appendText } from '../../utilities/set-content/append-text';
import { appendIcon } from '../../utilities/set-content/append-icon';

function manageContent(node, content) {
	const { text, icon, type, href, target } = content;

	if (text) {
		appendText(node, text);
	}

	if (icon) {
		appendIcon(node, icon);
	}

	if (type) {
		node.classList.add(`wences-button-${type}`);
	} else {
		node.classList.add('wences-button-primary');
	}

	if (href) {
		node.addEventListener('click', () => {
			window.open(href, target || '_self');
		});
	}

	node.style.cursor = 'pointer';

	if (node.disabled) {
		node.style.cursor = 'auto';
	}

	return node;
}

export { manageContent };
