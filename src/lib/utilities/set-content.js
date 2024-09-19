function setContent(element, content) {
	if (!validateParameters(element, content)) return;

	Object.entries(content).forEach(([key, value]) => {
		if (key === 'icon') {
			if (typeof value === 'string') {
				const iconContainer = document.createElement('i');
				iconContainer.setAttribute('data-lucide', value);
				element.appendChild(iconContainer);
				return;
			}
			if (value instanceof HTMLElement || value instanceof SVGElement) {
				element.appendChild(value);
			}
		}

		if (key === 'text') {
			if (typeof value === 'string') {
				const textHolder = document.createElement('p');
				textHolder.textContent = value;
				element.appendChild(textHolder);
			}
		}

		if (key === 'elements') {
			if (Array.isArray(value)) {
				value.forEach((valueElement) => {
					if (valueElement instanceof HTMLElement) {
						element.appendChild(valueElement);
					}
				});
			}
		}
	});
}

function validateParameters(element, content) {
	if (!element || !(element instanceof HTMLElement)) {
		console.error('Invalid element. Must be an instance of HTMLElement.');
		return false;
	}

	if (!content || typeof content !== 'object') {
		console.error('Invalid content. Must be a non-null object.');
		return false;
	}

	if (Object.keys(content).length === 0) {
		console.error('Content object is empty.');
		return false;
	}

	const validKeys = ['icon', 'text', 'elements'];
	const invalidKeys = Object.keys(content).filter(
		(key) => !validKeys.includes(key)
	);

	if (invalidKeys.length > 0) {
		console.error(
			`Invalid content keys: ${invalidKeys.join(', ')}. Expected "icon", "text", or "elements".`
		);
		return false;
	}

	if ('text' in content && typeof content.text !== 'string') {
		console.error('Invalid value for "text". Must be a string.');
		return false;
	}

	if ('icon' in content) {
		const iconValue = content.icon;
		if (
			typeof iconValue !== 'string' &&
			!(iconValue instanceof HTMLElement || iconValue instanceof SVGElement)
		) {
			console.error(
				'Invalid value for "icon". Must be a string or an HTMLElement.'
			);
			return false;
		}
	}

	if ('elements' in content) {
		if (
			!Array.isArray(content.elements) ||
			!content.elements.every((element) => element instanceof HTMLElement)
		) {
			console.error(
				'Invalid value for "elements". Must be an array of HTMLElements.'
			);
			return false;
		}
	}

	return true;
}

export { setContent };
