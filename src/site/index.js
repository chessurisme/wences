import { setAttributes } from '../lib/utilities/set-attributes';

const element = document.createElement('div');
const attributes = { class: 0 };
setAttributes(element, attributes);
document.body.appendChild(element);
