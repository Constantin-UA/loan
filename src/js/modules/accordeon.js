export default class Accordeon {
	constructor(selector) {
		this.item = document.querySelector(selector);
		this.btn = this.item.querySelector('.module__info-show .plus');
		this.msg = this.item.querySelector('.msg');
	}
	init() {
		try {
			this.btn.addEventListener('click', () => {
				this.msg.style.display = 'flex';
				this.msg.style.fontSize = '14px';
				this.msg.classList.add('animated', 'fadeIn');
				this.item.querySelectorAll('hr')[1].style.marginTop = 0;
			});
		} catch (error) {}
	}
}
