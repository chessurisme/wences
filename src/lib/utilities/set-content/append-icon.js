import { logError } from '../error-manager';

const appendIcon = (element, icon) => {
	// Only support Lucide icons as of now
	if (typeof icon === 'string') {
		const iconContainer = document.createElement('i');
		iconContainer.dataset.lucide = icon;

		element.appendChild(iconContainer);
		return;
	}

	if (icon instanceof HTMLElement || icon instanceof SVGElement) {
		element.appendChild(icon);
		return;
	}

	logError('SC-4');
};

export { appendIcon };
