import { setAttributes } from '../../utilities/set-attributes';
import { setBehavior } from '../../utilities/set-behavior';
import { setContent } from '../../utilities/set-content';
import { setState } from '../../utilities/set-state';
import { setStyles } from '../../utilities/set-style';

const BaseComponent = (config, tagName = 'div') => {
	const { attribute, behavior, style, content, state } = config;

	const component = document.createElement(tagName);

	if (attribute) {
		setAttributes(component, attribute);
	}

	if (behavior) {
		setBehavior(component, behavior);
	}

	if (style) {
		setStyles(component, style);
	}

	if (content) {
		setContent(component, content);
	}

	if (state) {
		setState(component, state);
	}

	return component;
};

export { BaseComponent };
