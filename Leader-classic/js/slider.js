const sizesSliderEl = document.querySelector(".slider");

if (sizesSliderEl && typeof Swiper !== "undefined") {
	new Swiper(sizesSliderEl, {
		loop: true,
		spaceBetween: 20,
		slidesPerView: 2,
		breakpoints: {
			576: {
				slidesPerView: 3,
				spaceBetween: 24,
			},
			768: {
				slidesPerView: 3,
				spaceBetween: 30,
			},
		},
	});
}