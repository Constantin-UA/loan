export default class ShowInfo {
	constructor(triggers) {
		this.btns = document.querySelectorAll(triggers);
	}

	init() {
		this.btns.forEach((btn) => {
			btn.addEventListener('click', () => {
				const sibling = btn.closest('.module__info-show').nextElementSibling;
				sibling.classList.add('animated', 'fadeIn');

				if (sibling.classList.contains('msg')) {
					btn.closest('.module__info').querySelectorAll('hr')[1].style.marginTop = 0;
				} else {
					btn.closest('.module__info').querySelectorAll('hr')[1].style.marginTop = '20px';
				}

				sibling.classList.toggle('msg');
				sibling.style.marginTop = '25px';
				sibling.style.fontSize = '16px';
			});
		});
	}
}
