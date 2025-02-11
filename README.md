<img src='./assets/images/Wences.svg' height="150px" alt="Wences">

# Wences

Wences is a lightweight, modular JavaScript utility for creating and managing HTML elements with a clean, declarative API. It provides a structured way to handle HTML attributes, accessibility, events, content management, and element lifecycle through a simple configuration object.

## Features

- 🚀 Easy Setup: Create and manage HTML elements with a simple, intuitive config
- ♿ Built-in Accessibility: ARIA attributes handled automatically
- 🔒 Type Safe: Ensures valid elements and attributes at runtime
- 📦 Modular: Features are isolated for easy debugging and maintenance
- 🎛️ Event Handling: Simplified event management with auto-cleanup
- ⚡ State Management: Supports boolean attributes with proper HTML5 compliance
- 🎨 Style Handling: Clean API with automatic kebab-case conversion
- 👶 Child Elements: Easy creation, management, and cleanup of child elements
- 🔄 Lifecycle Control: Manages creation, updates, and destruction
- 🌀 Cloning: Supports deep and shallow cloning with config preservation
- 🧹 Memory Safe: Auto-cleans events and references when elements are removed

## Installation

Using npm:

```bash
npm install wences
```

Using yarn:

```bash
yarn add wences
```

Using bun:

```bun
bun install wences
```

## Basic Usage

```javascript
import Wences from 'wences';

// Create a button with various configurations
const button = new Wences('button', {
    accessibility: {
        label: 'Submit form',
        role: 'button',
        describedBy: 'description'
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
        disabled: true,
        hidden: false
    }
});

// Create and append child elements
const icon = button.appendChild('span', {
    general: { class: 'icon' }
});

// Append to a parent element
button.appendTo('#form-container');
```

## Configuration Options

### Accessibility Configuration

Handle accessibility attributes without requiring the 'aria-' prefix:

```javascript
{
    accessibility: {
        // Standard role attribute (remains unchanged)
        role: 'button',
        
        // Aria attributes (automatically prefixed with 'aria-')
        label: 'Submit button',      // becomes aria-label
        describedBy: 'description',  // becomes aria-describedby
        current: 'page',            // becomes aria-current
        expanded: 'false',          // becomes aria-expanded
        hidden: 'true'             // becomes aria-hidden
    }
}
```

### Contents Configuration

Manage child elements and content nodes:

```javascript
{
    contents: {
        // Array of valid DOM nodes
        children: [
            document.createElement('div'),
            document.createTextNode('Hello'),
            document.createElement('svg'),
            new Text('World')
        ]
    }
}
```

### Events Configuration

Handle DOM event listeners with automatic cleanup:

```javascript
{
    events: {
        // Standard DOM events
        click: (e) => console.log('Clicked'),
        mouseenter: (e) => console.log('Mouse entered'),
        
        // Events with 'on' prefix (automatically normalized)
        onChange: (e) => console.log('Changed'),
        
        // Custom events
        'custom-event': (e) => console.log('Custom event fired')
    }
}
```

### General Attributes Configuration

Manage standard HTML attributes:

```javascript
{
    general: {
        // Standard HTML attributes
        id: 'my-element',
        class: 'button primary',
        name: 'submit-button',
        
        // Data attributes
        'data-test': 'value',
        'data-user-id': '123',
        
        // Custom attributes
        title: 'My Button',
        lang: 'en'
    }
}
```

### State Configuration

Handle boolean attributes following HTML5 specifications:

```javascript
{
    state: {
        // Standard boolean attributes
        disabled: true,    // adds disabled attribute
        hidden: false,     // removes hidden attribute
        required: true,    // adds required attribute
        checked: false,    // removes checked attribute
    }
}
```

Valid boolean attributes include: `async`, `autofocus`, `autoplay`, `checked`, `disabled`, `hidden`, `multiple`, `readonly`, `required`, `selected`, and more.

### Style Configuration

Manage inline styles with support for camelCase and kebab-case:

```javascript
{
    style: {
        // CamelCase properties
        backgroundColor: '#fff',
        fontSize: '16px',
        marginTop: '10px',
        
        // Kebab-case properties
        'background-color': '#fff',
        'font-size': '16px',
        'margin-top': '10px',
        
        // Transforms and animations
        transform: 'translateX(10px)',
        transition: 'all 0.3s ease'
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

#### appendChild(tagName: string, config?: WencesConfig)

Creates and appends a child Wences element.

```javascript
const child = wencesInstance.appendChild('div', {
    style: { color: 'red' }
});
```

#### appendTo(parent: Element | string)

Appends the element to a parent element or selector.

```javascript
wencesInstance.appendTo('#container');
```

#### destroy()

Removes the element and cleans up all event listeners and references.

```javascript
wencesInstance.destroy();
```

#### update(newConfig: WencesConfig)

Updates the configuration of the element.

```javascript
wencesInstance.update({
    style: { color: 'blue' },
    state: { disabled: true }
});
```

#### clone(deep: boolean = false)

Creates a clone of the current Wences instance.

```javascript
const clone = wencesInstance.clone(true); // Deep clone
```

#### getConfig()

Gets the current configuration of the element.

```javascript
const config = wencesInstance.getConfig();
```

## Type Definitions

For TypeScript users:

```typescript
interface WencesConfig {
    accessibility?: {
        [key: string]: string;
        role?: string;
    };
    contents?: {
        children: (HTMLElement | SVGElement | Text)[];
    };
    events?: {
        [key: string]: (event: Event) => void;
    };
    general?: {
        [key: string]: string;
    };
    state?: {
        [key: string]: boolean;
    };
    style?: {
        [key: string]: string;
    };
}
```

## Error Handling

Wences includes comprehensive runtime validation and will throw errors for:

- Invalid HTML tag names
- Invalid children types (must be HTML elements or text nodes)
- Invalid parent elements when using appendTo()
- Invalid configuration object structure
- Invalid event handlers
- Invalid style values
- Memory leaks (via console warnings)

## Best Practices

1. **Always Destroy Elements**: Call `destroy()` when removing elements to prevent memory leaks
2. **Use Child Management**: Prefer `appendChild()` over direct DOM manipulation
3. **Config Updates**: Use `update()` instead of direct property manipulation
4. **Error Handling**: Wrap Wences operations in try-catch blocks for proper error handling
5. **Configuration Storage**: Use `getConfig()` to store/restore element states

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

```bash
# Install dependencies
npm install

# Run tests
npm test

# Build
npm run build

# Run linter
npm run lint
```

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Support

For support, please:

1. Check the [documentation](https://github.com/chessurisme/wences/blob/main/README.md)
2. Search [existing issues](https://github.com/chessurisme/wences/issues)
3. Open a [new issue](https://github.com/chessurisme/wences/issues/new)

---

Made with ❤️ by [Chessurisme](https://github.com/chessurisme)
