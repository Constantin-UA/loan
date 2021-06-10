import MainSlider from './modules/slider/slider-main';
import MiniSlider from './modules/slider/slider-mini';
import VideoPlayer from './modules/playVideo';
import Difference from './modules/difference';

window.addEventListener('DOMContentLoaded', () => {
	const slider = new MainSlider({ container: '.page', btns: '.next' });
	slider.render();

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

	/* const difference = new Difference('.officerold', '.officernew', '.officer__card-item');
	difference.init(); */

	new Difference('.officerold', '.officer__card-item').init();
	new Difference('.officernew', '.officer__card-item').init();
});
