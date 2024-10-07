/**
 * @typedef {Object} ComponentConfig
 * @property {Object} [attribute] - An object containing HTML attributes to set on the component.
 * @property {string} [attribute.value] - The value for the HTML attribute (must be a string).
 *
 * @property {Object} [behavior] - An object containing event handlers to set on the component.
 * @property {Function} [behavior.eventType] - The function to call when the specified event occurs (e.g., `click`, `mouseover`).
 *
 * @property {Object} [state] - An object containing boolean attributes to apply to the component.
 * @property {boolean} [state.value] - The value for the boolean attribute (true or false).
 *
 * @property {Object} [style] - An object containing styles to apply to the component.
 * @property {string|Object} [style.value] - The value for the CSS property.
 */
