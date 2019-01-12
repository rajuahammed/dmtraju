$(document).ready(function () {
	"use strict";
	$('body').addClass('preload-site');

	// Scroll To Top
	$('body').prepend('<div class="go-top"><span id="top"><i class="ion-chevron-up"></i></span></div>');

	$(window).scroll(function () {
		if ($(window).scrollTop() > 500) {
			$('.go-top').fadeIn(600);
		} else {
			$('.go-top').fadeOut(600);
		}
	});
	$('#top').click(function () {
		$('html, body').animate({
			scrollTop: 0
		}, 800, 'easeInQuad');
		return false;
	});

	// Match Height
	$('.items-row').each(function () {
		$(this).children('.single-item').matchHeight();
	});
	// Mobile Menu
	$('#nav').slicknav({
		label: '',
		duration: 700,
		prependTo: '.mobile-menu'
	});

});

$(window).load(function () {
	$('#preloader').fadeOut();
	$('.preloader-spinner').fadeOut(400);
	$('body').removeClass('preload-site');
});


$(document).ready(function () {

	$(".homepage-slide").owlCarousel({
		items: 1,
		dots: true,
		loop: true,
		nav: false,
		autoplay: true,
		smartSpeed: 500

	});

});
