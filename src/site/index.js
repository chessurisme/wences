import {
	createIcons,
	CircleCheck,
	CircleX,
	Info,
	X,
	TriangleAlert
} from 'lucide';
import { Callout } from '../lib/components/callout';

function initializeApp() {
	const callout = Callout({
		content: {
			type: 'success',
			title: 'Very Good!',
			body: 'You score 20/20.'
		}
	});

	const elements = [callout];

	elements.forEach((element) => {
		document.body.appendChild(element);
	});
}

initializeApp();

createIcons({
	icons: {
		X,
		CircleCheck,
		Info,
		TriangleAlert,
		CircleX
	}
});
