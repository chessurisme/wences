import '../lib/styles/root.css';
import '../lib/styles/body.css';
import {
	Apple,
	ChevronLeft,
	ChevronRight,
	createIcons,
	Grape,
	Menu,
	Play,
	Plus
} from 'lucide';
import { Avatar } from '../lib/components/avatar/avatar';

document.body.appendChild(
	Avatar({
		attribute: {
			title: 'Logo',
			class: 'avatar'
		},
		content: {
			src: 'https://avatars.githubusercontent.com/u/137697011?v=4',
			alt: 'chessurisme'
		}
	})
);

createIcons({
	icons: {
		Apple,
		Grape,
		Menu,
		Play,
		Plus,
		ChevronLeft,
		ChevronRight
	}
});
