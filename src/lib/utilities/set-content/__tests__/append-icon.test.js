import { appendIcon } from '../append-icon';
import { logError } from '../../error-manager';

jest.mock('../../error-manager');

describe('appendIcon', () => {
  let element;

  beforeEach(() => {
    element = document.createElement('div');
    jest.clearAllMocks();
  });

  describe('Happy Cases', () => {
    it('should append a Lucide icon when a valid string is provided', () => {
      const icon = 'check';
      appendIcon(element, icon);
      expect(element.childElementCount).toBe(1);
      const iconContainer = element.firstChild;
      expect(iconContainer.tagName).toBe('I');
      expect(iconContainer.dataset.lucide).toBe(icon);
      expect(logError).not.toHaveBeenCalled();
    });

    it('should append an HTML element when an HTMLElement is provided', () => {
      const customIcon = document.createElement('span');
      customIcon.textContent = '★';
      appendIcon(element, customIcon);
      expect(element.childElementCount).toBe(1);
      expect(element.firstChild).toBe(customIcon);
      expect(logError).not.toHaveBeenCalled();
    });

    it('should append an SVG element when an SVGElement is provided', () => {
      const svgIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      const svgPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      svgIcon.appendChild(svgPath);
      appendIcon(element, svgIcon);
      expect(element.childElementCount).toBe(1);
      expect(element.firstChild).toBe(svgIcon);
      expect(logError).not.toHaveBeenCalled();
    });
  });

  describe('Edge Cases', () => {
    it('should log an error when the icon is an object', () => {
      const invalidIcon = { name: 'check' };
      appendIcon(element, invalidIcon);
      expect(element.childElementCount).toBe(0);
      expect(logError).toHaveBeenCalledWith('SC-4');
    });

    it('should log an error when the icon is an array', () => {
      const invalidIcon = ['check'];
      appendIcon(element, invalidIcon);
      expect(element.childElementCount).toBe(0);
      expect(logError).toHaveBeenCalledWith('SC-4');
    });

    it('should log an error when the icon is a function', () => {
      const invalidIcon = () => 'check';
      appendIcon(element, invalidIcon);
      expect(element.childElementCount).toBe(0);
      expect(logError).toHaveBeenCalledWith('SC-4');
    });

    it('should log an error when the icon is undefined', () => {
      appendIcon(element, undefined);
      expect(element.childElementCount).toBe(0);
      expect(logError).toHaveBeenCalledWith('SC-4');
    });

    it('should log an error when the icon is null', () => {
      appendIcon(element, null);
      expect(element.childElementCount).toBe(0);
      expect(logError).toHaveBeenCalledWith('SC-4');
    });
  });

  describe('Others', () => {
    it('should allow appending multiple icons to the same element', () => {
      const icon1 = 'check';
      const icon2 = document.createElement('span');
      icon2.textContent = '★';
      appendIcon(element, icon1);
      appendIcon(element, icon2);
      expect(element.childElementCount).toBe(2);
      expect(element.children[0].dataset.lucide).toBe(icon1);
      expect(element.children[1]).toBe(icon2);
      expect(logError).not.toHaveBeenCalled();
    });

    it('should create a new element each time a string icon is provided', () => {
      const icon = 'check';
      appendIcon(element, icon);
      appendIcon(element, icon);
      expect(element.childElementCount).toBe(2);
      expect(element.children[0].dataset.lucide).toBe(icon);
      expect(element.children[1].dataset.lucide).toBe(icon);
      expect(logError).not.toHaveBeenCalled();
    });
  });
});
