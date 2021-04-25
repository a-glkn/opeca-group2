
const toggleClass = (el, className) => el.classList.toggle(className);


document.querySelector('.menu-toggler').onclick = function() {
	toggleClass(document.querySelector('body'), 'menu-openned');
}


document.addEventListener( 'DOMContentLoaded', function () {
	var splide = document.getElementsByClassName('intro-slider') ? document.getElementsByClassName('intro-slider')[0] : null;
	if (typeof(splide) != 'undefined' && splide != null) {
		new Splide( '.intro-slider', {
			type   : 'loop'
		} ).mount();
	}

	var reviewsSplide = document.getElementsByClassName('reviews-slider') ? document.getElementsByClassName('reviews-slider')[0] : null;
	if (typeof(reviewsSplide) != 'undefined' && reviewsSplide != null) {
		new Splide( '.reviews-slider', {
			type   : 'loop',
			pagination: false,
			perPage: 3,
			breakpoints: {
				991: {
					perPage: 2,
				},
				576: {
					perPage: 1,
				},
			}
		} ).mount();
	}

	if( document.getElementById("type") ) {
		new CustomSelect({
			elem: "type"
		});
	}

	if( document.getElementById("days") ) {
		new CustomSelect({
			elem: "days"
		});
	}

	if( document.getElementById("type-popup") ) {
		new CustomSelect({
			elem: "type-popup"
		});
	}

	if( document.getElementById("days-popup") ) {
		new CustomSelect({
			elem: "days-popup"
		});
	}
	
} );


/* Трекинг скрола. Первая секция после шапки
должна содержать класс "section-scroll-track" */

(() => {
	if( ! document.querySelector('.section-scroll-track') ) {
		return;
	}
	
	let supportOffset = window.pageYOffset !== undefined;
	let lastKnownPos = 0;
	let ticking = false;
	let scrollDir;
  
	function callback(scrollPos, scrollDir) {
	  if( scrollPos > document.querySelector('.section-scroll-track').clientHeight ) {
		document.querySelector('body').classList.add('header-inside_fixed');
	  } else {
		document.querySelector('body').classList.remove('header-inside_fixed');
	  }
	}
  
	window.addEventListener('wheel', e => {
	  currYPos = supportOffset ? window.pageYOffset : document.body.scrollTop;
	  scrollDir = lastKnownPos > currYPos || currYPos === 0 ? 'up' : 'down';
	  lastKnownPos = currYPos;
  
	  if (!ticking) {
		window.requestAnimationFrame(() => {
		  callback(lastKnownPos, scrollDir);
		  ticking = false;
		});
	  }
	  ticking = true;
	});
})();


function openPopup(id) {
	var el = document.getElementById(id);
	el.style.display = 'block';

	let supportOffset = window.pageYOffset !== undefined;
	var currYPos = supportOffset ? window.pageYOffset : document.body.scrollTop;
	var popupH = el.offsetHeight;
	const winHeight = window.innerHeight|| document.documentElement.clientHeight|| document.body.clientHeight;
	
	el.style.top = (((winHeight - popupH) / 2) + currYPos) + 'px';

	document.querySelector('.popup-overlay').style.display = 'block';
}
  
function closePopup() {
	var els = document.querySelectorAll('.popup')
	els.forEach(function(el, index) {
		el.style.display = 'none';
	});

	document.querySelector('.popup-overlay').style.display = 'none';
}

if( document.querySelector('.popup-overlay') ) {
	document.querySelector('.popup-overlay').addEventListener('click', event => {
		closePopup();
	});
}


