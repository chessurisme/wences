import { Badge } from '../lib/components/badge';

function initializeApp() {
	const badge = Badge({
		content: {
			type: 'warning',
			text: 'Code 32'
		}
	});

	const badge2 = Badge({
		content: {
			type: 'success',
			text: 'Jest tested'
		}
	});

	const elements = [badge, badge2];

	elements.forEach((element) => {
		document.body.appendChild(element);
	});
}

initializeApp();
