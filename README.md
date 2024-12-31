<img src='./assets/images/Wences.svg' height="200px" alt="Wences">

# Wences

Wences is a lightweight, modular JavaScript utility for creating and managing HTML elements with a clean, declarative API. It provides a structured way to handle HTML attributes, accessibility, events, and content management through a simple configuration object.

## Features

- **Declarative API**: Create HTML elements with a simple, intuitive configuration object
- **Built-in Accessibility**: Automatic handling of ARIA attributes without prefix requirements
- **Type Safety**: Runtime validation for HTML elements and attributes
- **Modular Architecture**: Each feature is isolated in its own module for easy debugging and maintenance
- **Event Management**: Simplified event handling with automatic 'on' prefix normalization
- **State Management**: Built-in support for boolean attributes with proper HTML5 compliance
- **Style Handling**: Clean API for managing inline styles with automatic kebab-case conversion

## Installation

Using npm:

```bash
npm install wences
```

Using yarn:

```bash
yarn add wences
```

## Basic Usage

```javascript
import Wences from 'wences';

// Create a button with various configurations
const button = new Wences('button', {
    accessibility: {
        label: 'Submit form',        // Becomes aria-label
        role: 'button',              // Stays as role
        describedBy: 'description'   // Becomes aria-describedby
    },
    general: {
        class: 'primary-button',
        id: 'submit-btn'
    },
    style: {
        backgroundColor: 'blue',
        color: 'white'
    },
    events: {
        click: () => console.log('Button clicked'),
        mouseenter: () => console.log('Mouse entered')
    },
    state: {
        disabled: false
    },
    contents: {
        children: [
            document.createElement('span')  // Must be HTML elements
        ]
    }
});

// Append to a parent element
button.appendTo('#form-container');
```

## Configuration Options

### Accessibility

Handle accessibility attributes without requiring the 'aria-' prefix:

```javascript
{
    accessibility: {
        label: 'Submit',          // becomes aria-label
        role: 'button',          // remains as role
        describedBy: 'desc',     // becomes aria-describedby
        expanded: 'false'        // becomes aria-expanded
    }
}
```

### General Attributes

Set any standard HTML attributes:

```javascript
{
    general: {
        class: 'my-class',
        id: 'my-id',
        name: 'my-name',
        title: 'My Title'
    }
}
```

### Styles

Apply inline styles using camelCase properties:

```javascript
{
    style: {
        backgroundColor: '#fff',
        fontSize: '16px',
        marginTop: '10px'
    }
}
```

### Events

Attach event listeners (with or without 'on' prefix):

```javascript
{
    events: {
        click: () => {},           // both work
        onClick: () => {},         // both work
        mouseenter: () => {},
        touchstart: () => {}
    }
}
```

### State

Manage boolean attributes:

```javascript
{
    state: {
        disabled: true,
        required: false,
        checked: true
    }
}
```

### Contents

Add child elements:

```javascript
{
    contents: {
        children: [
            document.createElement('div'),
            document.createElement('span')
        ]
    }
}
```

## API Reference

### Constructor

```javascript
new Wences(tagName: string, config: WencesConfig)
```

### Methods

#### getElement()

Returns the underlying DOM element.

```javascript
const element = wencesInstance.getElement();
```

#### appendTo(parent: string | Element)

Appends the element to a parent element.

```javascript
wencesInstance.appendTo('#container');
// or
wencesInstance.appendTo(document.querySelector('#container'));
```

## Error Handling

Wences includes runtime validation and will throw errors for:

- Invalid HTML tag names
- Invalid children types (must be HTML elements)
- Invalid parent elements when using appendTo()
- Invalid configuration object structure

## Browser Support

Wences supports all modern browsers:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Setup

1. Clone the repository
2. Install dependencies: `npm install`
3. Run tests: `npm test`
4. Start development server: `npm run dev`

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Support

For support, please:

1. Check the [documentation](https://github.com/yourusername/wences/wiki)
2. Open an [issue](https://github.com/yourusername/wences/issues)

## Acknowledgments

- Inspired by modern web development practices
- Built with accessibility in mind
- Designed for developer experience
