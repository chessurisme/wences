function manageIndex(element) {
	element.addEventListener('click', (event) => {
		const button = event.target.closest('button');

		if (button && element.contains(button)) {
			const activeButton = element.querySelector('.wences-tab-active');

			if (activeButton) {
				activeButton.classList.remove('wences-tab-active');
			}

			button.classList.add('wences-tab-active');
		}
	});
}

export { manageIndex };
