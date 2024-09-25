import { generalErrorMessages } from './error-messages-general';
import { setAttributesErrorMessages } from './error-messages-set-attributes';

const errorMessages = {
	...generalErrorMessages,
	...setAttributesErrorMessages
};

export { errorMessages };
