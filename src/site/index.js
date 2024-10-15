import { Accordion } from '../lib/components/accordion';

function initializeApp() {
	const accordion = Accordion({
		attribute: {
			id: 'myAccordion',
			class: 'ten-faq'
		},
		content: {
			headerNameTag: 'h1',
			headerText: 'Component Library',
			sections: [
				{
					title: 'What is a component library?',
					panel:
						'A component library is useful because it provides a set of reusable, pre-built UI elements (like buttons, forms, or modals) that developers can easily integrate into projects.'
				},
				{
					title: 'Why component library is useful?',
					panel:
						'This helps ensure consistency across applications, reduces development time, and improves code maintainability. Instead of building each component from scratch, developers can focus on application logic, making the development process faster and more efficient while maintaining a unified look and feel across different parts of the app.'
				},
				{
					title: 'What are common components?',
					panel:
						'Common components in a component library include buttons, forms, modals, navigation bars, tables, and icons. These are elements that can be reused in different parts of a project to maintain a consistent UI.'
				},
				{
					title: 'How does a component library improve collaboration?',
					panel:
						'By providing a shared set of components, a component library helps teams work more efficiently together. Designers and developers can follow the same design patterns, reducing misunderstandings and ensuring that the UI remains cohesive across the project.'
				},
				{
					title: 'What technologies are used to build component libraries?',
					panel:
						'Component libraries are typically built using web technologies like HTML, CSS, and JavaScript. Frameworks like React, Vue, or Angular are often used to create more dynamic and reusable components.'
				}
			]
		}
	});

	const elements = [accordion];

	elements.forEach((element) => {
		document.body.appendChild(element);
	});
}

initializeApp();

createIcons({
	icons: {
		X,
		Heart
	}
});
