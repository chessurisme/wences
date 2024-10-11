import { Textarea } from '../lib/components/textarea';

function initializeApp() {
	const textarea = Textarea({
		attribute: {
			placeholder: "What's up?"
		}
	});

	const elements = [textarea];

	elements.forEach((element) => {
		document.body.appendChild(element);
	});
}

initializeApp();
