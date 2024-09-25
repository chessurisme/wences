import { generalErrorMessages } from './error-messages-general';
import { setAttributesErrorMessages } from './error-messages-set-attributes';
import { setBehaviorErrorMessages } from './error-messages-set-behavior';
import { setStateErrorMessages } from './error-messages-set-state';

const errorMessages = {
	...generalErrorMessages,
	...setAttributesErrorMessages,
	...setBehaviorErrorMessages,
	...setStateErrorMessages
};

export { errorMessages };
