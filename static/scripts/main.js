// responsive carousel

let swiper = new Swiper('.mySwiper', {
	slidesPerView: 1,
	spaceBetween: 30,
	slidesPerGroup: 1,
	loop: true,
    cssMode: true,
    slidesPerView: "auto",
    centeredSlides: true,
	loopFillGroupWithBlank: true,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	autoplay: {
		delay: 5000,
		disableOnInteraction: false,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	breakpoints: {
		1080: {
			slidesPerView: 4,
			spaceBetween: 30,
			slidesPerGroup: 4,
		},
		500: {
			slidesPerView: 2,
			spaceBetween: 30,
			slidesPerGroup: 2,
		},
	},
});