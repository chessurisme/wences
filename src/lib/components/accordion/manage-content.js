function manageContent(node, content) {
	const { headerNameTag = 'h2', headerText, sections = [] } = content;

	const header = document.createElement(headerNameTag);
	header.textContent = headerText;
	node.appendChild(header);

	sections.forEach(({ title, panel }) => {
		const details = document.createElement('details');
		const summary = document.createElement('summary');
		const text = document.createElement('p');

		summary.textContent = title;

		if (typeof panel === 'string') {
			text.textContent = panel;
		} else if (panel instanceof HTMLElement) {
			text.appendChild(panel);
		}

		details.appendChild(summary);
		details.appendChild(text);
		node.appendChild(details);
	});

	node.dataset.wences = 'accordion';
	return node;
}

export { manageContent };
