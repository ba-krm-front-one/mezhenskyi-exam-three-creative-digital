$(window).resize(function () {
	if ($(this).width() < 1200 && $(this).width() >= 992) {
		$('.ba-about-us-right').removeClass('pull-right');
		$('.ba-about-us__button').removeClass('btn-block');
		$('.ba-works-btn').removeClass('btn-block');
	} else if ($(this).width() < 992 && $(this).width() >= 768) {
		$('.ba-about-us__button').removeClass('btn-block');
		$('.ba-works-btn').removeClass('btn-block');
	} else if ($(this).width() < 768) {
	$('.ba-about-us__button').addClass('btn-block');
	$('.ba-works-btn').addClass('btn-block');
	}
});


