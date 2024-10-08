# Button

A versatile and customizable button component for web applications.

## Overview

The Button component is a flexible UI element that can be easily configured for various use cases. It supports different visual styles, content types, behaviors, and states.

## Configuration

The Button component accepts a configuration object with the following properties:

### `attribute: {}`

Supports all [HTML Button Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes) and [Global HTML Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes).

### `behavior: {}`

Supports all [HTML Event Attributes](https://developer.mozilla.org/en-US/docs/Web/Events). These define the button's interactive behavior.

### `content: {}`

| Property | Type                                  | Description                    | Default      | Possible Values                                             |
|----------|---------------------------------------|--------------------------------|--------------|-------------------------------------------------------------|
| `text`   | `string`                              | Button text content            | `undefined`  | Any string                                                  |
| `icon`   | `string \| SVGElement \| HTMLElement` | Button icon                    | `undefined`  | Icon identifier, SVG, or HTML element                       |
| `type`   | `string`                              | Visual hierarchy of the button | `'tertiary'` | `'primary'`, `'secondary'`, `'tertiary'`                    |
| `href`   | `string`                              | URL for link buttons           | `undefined`  | Any valid URL                                               |
| `target` | `string`                              | Link target (for `href`)       | `undefined`  | `'_blank'`, `'_self'`, `'_parent'`, `'_top'`, or frame name |

### `state: {}`

| Property    | Type      | Description                                   | Default |
|-------------|-----------|-----------------------------------------------|---------|
| `disabled`  | `boolean` | Disables the button                           | `false` |
| `autofocus` | `boolean` | Automatically focuses the button on page load | `false` |

Additionally supports Global HTML Attributes with pure boolean values, initially set to `false`:

- `inert`
- `hidden`
- `popover`

> [!NOTE]
> Although `contenteditable`, `draggable`, and `spellcheck` accept boolean-like values, they should be set in the `attribute` object as strings.

### `style: {}`

Supports all properties of the [HTML DOM Style Object](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style).

## Usage

### Primary Button with Text

```js
Button({
  content: {
    text: "Submit",
    type: "primary"
  },
  behavior: {
    onClick: () => console.log("Button clicked!")
  }
});
```

### Secondary Button with Icon and Text

```js
Button({
  content: {
    text: "Add to Cart",
    icon: "<svg>...</svg>",
    type: "secondary"
  },
  state: {
    disabled: false
  },
  style: {
    padding: "10px 20px",
    borderRadius: "4px"
  }
});
```

### Link Button

```js
Button({
  content: {
    text: "Learn More",
    type: "tertiary",
    href: "https://example.com",
    target: "_blank"
  },
  attribute: {
    rel: "noopener noreferrer"
  }
});
```

## Accessibility

- Ensure that buttons have meaningful text content or proper ARIA labels for screen readers.
- Use the `disabled` state appropriately and provide visual feedback.
- Consider keyboard navigation and focus management, especially when using custom styles.

## Best Practices

1. Use clear and concise text for button labels.
2. Choose appropriate button types based on their importance in the UI.
3. Provide visual feedback for different button states (hover, active, focus).
4. Ensure sufficient color contrast for accessibility.
5. Use icons judiciously to enhance, not replace, text labels.
