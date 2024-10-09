import { Container } from '..';
import { setAccessibility } from '../../../utilities/set-accessibility';
import { setAttributes } from '../../../utilities/set-attributes';
import { setBehavior } from '../../../utilities/set-behavior';
import { setState } from '../../../utilities/set-state';
import { setStyles } from '../../../utilities/set-style';

jest.mock('../../../utilities/set-accessibility');
jest.mock('../../../utilities/set-attributes');
jest.mock('../../../utilities/set-behavior');
jest.mock('../../../utilities/set-state');
jest.mock('../../../utilities/set-style');

describe('Container', () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	describe('Happy Cases', () => {
		it('should create a div element by default', () => {
			const component = Container({});
			expect(component.tagName.toLowerCase()).toBe('div');
		});

		it('should apply accessibility if provided', () => {
			const config = { accessibility: { role: 'button' } };
			const component = Container(config);

			expect(setAccessibility).toHaveBeenCalledWith(
				component,
				config.accessibility
			);
		});

		it('should apply attributes if provided', () => {
			const config = { attribute: { id: 'test', class: 'container' } };
			const component = Container(config);

			expect(setAttributes).toHaveBeenCalledWith(component, config.attribute);
		});

		it('should apply behavior if provided', () => {
			const config = { behavior: { onClick: jest.fn() } };
			const component = Container(config);

			expect(setBehavior).toHaveBeenCalledWith(component, config.behavior);
		});

		it('should apply styles if provided', () => {
			const config = { style: { backgroundColor: 'red' } };
			const component = Container(config);

			expect(setStyles).toHaveBeenCalledWith(component, config.style);
		});

		it('should apply state if provided', () => {
			const config = { state: { disabled: true } };
			const component = Container(config);

			expect(setState).toHaveBeenCalledWith(component, config.state);
		});
	});

	describe('Edge Cases', () => {
		it('should create an element with the specified tagName', () => {
			const component = Container({}, 'section');
			expect(component.tagName.toLowerCase()).toBe('section');
		});

		it('should not call setAccessibility if no accessibility is provided', () => {
			Container({});
			expect(setAccessibility).not.toHaveBeenCalled();
		});

		it('should not call setAttributes if no attributes are provided', () => {
			Container({});
			expect(setAttributes).not.toHaveBeenCalled();
		});

		it('should not call setBehavior if no behavior is provided', () => {
			Container({});
			expect(setBehavior).not.toHaveBeenCalled();
		});

		it('should not call setStyles if no styles are provided', () => {
			Container({});
			expect(setStyles).not.toHaveBeenCalled();
		});

		it('should not call setState if no state is provided', () => {
			Container({});
			expect(setState).not.toHaveBeenCalled();
		});
	});

	describe('Other Cases', () => {
		it('should handle multiple configurations at once', () => {
			const config = {
				accessibility: { role: 'button' },
				attribute: { id: 'test', class: 'container' },
				behavior: { onClick: jest.fn() },
				style: { backgroundColor: 'blue' },
				state: { disabled: true }
			};

			const component = Container(config);

			expect(setAccessibility).toHaveBeenCalledWith(
				component,
				config.accessibility
			);
			expect(setAttributes).toHaveBeenCalledWith(component, config.attribute);
			expect(setBehavior).toHaveBeenCalledWith(component, config.behavior);
			expect(setStyles).toHaveBeenCalledWith(component, config.style);
			expect(setState).toHaveBeenCalledWith(component, config.state);
		});
	});
});
