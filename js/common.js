new Splide( '.splide', {
	type   : 'loop'
} ).mount();

const toggleClass = (el, className) => el.classList.toggle(className);

document.querySelector('.menu-toggler').onclick = function() {
	toggleClass(document.querySelector('body'), 'menu-openned');
}