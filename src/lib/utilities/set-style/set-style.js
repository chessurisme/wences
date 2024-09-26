import { applyStyles } from './apply-style';
import { logError } from '../error-manager';

const setStyles = (element, styles) => {
	validateParameters(element, styles)
		? applyStyles(element, styles)
		: logError('SSt-1');
};

export { setStyles };
