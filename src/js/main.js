import MainSlider from './modules/slider/slider-main';
import MiniSlider from './modules/slider/slider-mini';
import VideoPlayer from './modules/playVideo';
import Difference from './modules/difference';
import Forms from './modules/forms';

window.addEventListener('DOMContentLoaded', () => {
	new MainSlider({ container: '.page', btns: '.next' }).render();

	new MainSlider({ container: '.moduleapp', btns: '.next' }).render();

	new MiniSlider({
		container: '.showup__content-slider',
		prev: '.showup__prev',
		next: '.showup__next',
		activeClass: 'card-active',
		animate: true,
		autoplay: true,
	}).init();

	new MiniSlider({
		container: '.modules__content-slider',
		prev: '.modules__info-btns .slick-prev',
		next: '.modules__info-btns .slick-next',
		activeClass: 'card-active',
		animate: true,
		autoplay: true,
	}).init();

	new MiniSlider({
		container: '.feed__slider',
		prev: '.feed__slider .slick-prev',
		next: '.feed__slider .slick-next',
		activeClass: 'feed__item-active',
	}).init();

	new VideoPlayer('.showup .play', '.overlay').init();

	new Difference('.officerold', '.officer__card-item').init();
	new Difference('.officernew', '.officer__card-item').init();

	new Forms('.form', 0).init();
	new Forms('.form', 1).init();

	/* const difference = new Difference('.officerold', '.officernew', '.officer__card-item');
	difference.init(); */
});
