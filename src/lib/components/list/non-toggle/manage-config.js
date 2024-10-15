import { Container } from '../../container';

function manageConfig(config) {
	const { type, items, case: characterCase = 'lower' } = config.content;

	const node = (() => {
		if (type === 'roman' || type === 'alphabet' || type === 'number') {
			return Container(config, 'ol');
		}

		return Container(config, 'ul');
	})();
	const fragment = document.createDocumentFragment();

	items.forEach((item) => {
		const listNode = document.createElement('li');
		const labelNode = document.createElement('label');
		const spanNode = document.createElement('span');

		node.type = (() => {
			switch (type) {
				case 'roman':
					if (characterCase === 'upper') {
						return 'I';
					} else {
						return 'i';
					}
				case 'alphabet':
					if (characterCase === 'upper') {
						return 'A';
					} else {
						return 'a';
					}
				case 'number':
					return '1';
				default:
					return;
			}
		})();
		if (type === 'square' || type === 'circle' || type === 'disc') {
			node.style.listStyleType = type;
		}

		if (typeof item === 'object' && item.list) {
			spanNode.textContent = item.content;

			const nestedListNode = item.list;
			nestedListNode.style.paddingLeft = '40px';

			labelNode.appendChild(spanNode);
			listNode.appendChild(labelNode);
			listNode.appendChild(nestedListNode);
		} else {
			spanNode.textContent = item;

			labelNode.appendChild(spanNode);
			listNode.appendChild(labelNode);
		}

		fragment.appendChild(listNode);
	});

	node.appendChild(fragment);
	node.classList.add('wences-non-toggle-list');

	return node;
}

export { manageConfig };
