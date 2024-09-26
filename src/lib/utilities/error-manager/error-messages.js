import { generalErrorMessages } from './error-messages-general';
import { setAttributesErrorMessages } from './error-messages-set-attributes';
import { setBehaviorErrorMessages } from './error-messages-set-behavior';
import { setContentErrorMessages } from './error-messages-set-content';
import { setStateErrorMessages } from './error-messages-set-state';
import { setStyleErrorMessages } from './error-messages-set-style';

const errorMessages = {
	...generalErrorMessages,
	...setAttributesErrorMessages,
	...setBehaviorErrorMessages,
	...setStateErrorMessages,
	...setStyleErrorMessages,
	...setContentErrorMessages
};

export { errorMessages };
