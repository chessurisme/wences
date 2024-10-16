import { Container } from '../container';
import { appendIcon } from '../../utilities/set-content/append-icon';

function manageContent(node, content) {
	const { removable = true, elements = [] } = content;

	if (removable) {
		const removeContainer = document.createElement('div');
		const removeIcon = Container({ attribute: { 'data-lucide': 'x' } }, 'i');
		removeContainer.appendChild(removeIcon);
		removeContainer.style.cursor = 'pointer';

		removeContainer.addEventListener('click', () => {
			node.close();
		});

		appendIcon(node, removeContainer);
	}

	if (elements) {
		elements.forEach((element) => {
			node.appendChild(element);
		});
	}

	node.dataset.wences = 'modal';

	return node;
}

export { manageContent };
