import { Container } from '../container';
import { verifyContent } from './verify-content';
import { manageContent } from './manage-content';

const SwitchToggle = (config) => {
	if (!verifyContent(config.content)) return;

	const node = (() => {
		const { default: state = 'off' } = config.content;
		const container = Container(config, 'label');
		const checkbox = Container({ attribute: { type: 'checkbox' } }, 'input');
		const slider = Container(
			{ attribute: { class: 'wences-switch-slider' } },
			'span'
		);

		container.role = 'switch';

		if (state === 'on') {
			checkbox.checked = true;
		}

		container.appendChild(checkbox);
		container.appendChild(slider);

		return container;
	})();
	const switchToggle = (() => {
		node.classList.add('wences-switch-toggle');
		return manageContent(node, config.content);
	})();

	return switchToggle;
};

export { SwitchToggle };
