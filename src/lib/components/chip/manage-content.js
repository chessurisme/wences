import { appendIcon } from '../../utilities/set-content/append-icon';
import { appendText } from '../../utilities/set-content/append-text';
import { Container } from '../container';

function manageContent(node, content) {
	const { thumbnail, text, removable = true } = content;

	if (typeof thumbnail === 'string') {
		appendIcon(node, thumbnail);
	}

	if (
		thumbnail instanceof HTMLElement ||
		thumbnail instanceof Image ||
		thumbnail instanceof SVGElement
	) {
		node.appendChild(thumbnail);
	}

	appendText(node, text);

	if (removable) {
		const removeContainer = document.createElement('div');
		const removeIcon = Container({ attribute: { 'data-lucide': 'x' } }, 'i');
		removeContainer.appendChild(removeIcon);
		removeContainer.style.cursor = 'pointer';

		removeContainer.addEventListener('click', () => {
			if (removeContainer.parentNode) {
				removeContainer.parentNode.remove();
			}
		});

		appendIcon(node, removeContainer);
	}

	node.classList.add('wences-chip');

	return node;
}

export { manageContent };
