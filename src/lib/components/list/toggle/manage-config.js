import { Container } from '../../container';

function manageConfig(config) {
	const { type, checkIndex, name, items } = config.content;

	config.style = { listStyleType: 'none', paddingInlineStart: '0' };
	const node = Container(config, 'ul');
	const fragment = document.createDocumentFragment();

	items.forEach((item, indexOfItems) => {
		const listNode = document.createElement('li');
		const labelNode = document.createElement('label');
		const inputNode = document.createElement('input');
		const spanNode = document.createElement('span');

		inputNode.type = type === 'radio' ? 'radio' : 'checkbox';
		inputNode.name = name;

		spanNode.textContent = item;

		if (checkIndex && checkIndex.includes(indexOfItems)) {
			inputNode.checked = true;
		}

		labelNode.appendChild(inputNode);
		labelNode.appendChild(spanNode);
		listNode.appendChild(labelNode);

		fragment.appendChild(listNode);
	});

	node.appendChild(fragment);

	return node;
}

export { manageConfig };
