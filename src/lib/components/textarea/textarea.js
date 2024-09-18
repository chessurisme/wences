import { containerFactory } from '../../utilities/container-factory';

const textarea = (config) => {
	const {
		id,
		className,
		placeholder,
		value,
		readonly = false,
		hidden = false
	} = config;

	const textareaAttributes = {
		id: id,
		class: className,
		placeholder: placeholder
	};
	const textareaProps = {
		value: value,
		readonly: readonly,
		hidden: hidden
	};

	const textarea = containerFactory(
		'textarea',
		textareaAttributes,
		textareaProps
	);

	return textarea;
};

export { textarea };
