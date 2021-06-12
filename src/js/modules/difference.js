export default class Difference {
	constructor(officerSelector, items) {
		try {
			this.useItems = document.querySelector(officerSelector).querySelectorAll(items);
			this.useCounter = 0;
		} catch (e) {}
	}

	bindTriggers(container, counter) {
		container.forEach((item) => {
			if (item.querySelector('.plus')) {
				item.addEventListener('click', () => {
					container[counter].classList.add('fadeIn');
					container[counter].classList.remove('fadeOut');
					container[counter].style.display = 'flex';
					if (counter !== container.length - 2) {
						counter++;
					} else {
						container[container.length - 1].remove();
					}
				});
			}
		});
	}
	hideItems(items) {
		items.forEach((item, i, arr) => {
			if (i !== arr.length - 1) {
				item.style.display = 'none';
				item.classList.add('animated', 'fadeOut');
				item.classList.remove('fadeIn');
			}
		});
	}

	init() {
		try {
			this.hideItems(this.useItems);
			this.bindTriggers(this.useItems, this.useCounter);
		} catch (error) {}
	}
}
