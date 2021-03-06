export default class Slider {
	constructor({
		container = null,
		btns = null,
		next = null,
		prev = null,
		activeClass = '',
		animate,
		autoplay,
	} = {}) {
		this.container = document.querySelector(container);
		try {
			this.slides = this.container.children;
		} catch (e) {}
		this.btns = document.querySelectorAll(btns);
		this.prev = document.querySelector(prev);
		this.next = document.querySelector(next);
		this.slideIndex = 1;
		this.activeClass = activeClass;
		this.autoplay = autoplay;
		this.animate = animate;
	}
}
