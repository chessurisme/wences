import { containerFactory } from '../../utilities/container-factory';

const toast = (config) => {
	const { time, text, position } = config;

	const toastProps = {
		text: text,
		time: time,
		position: position
	};

	const toast = containerFactory('div', null, toastProps);

	return toast;
};

export { toast };
