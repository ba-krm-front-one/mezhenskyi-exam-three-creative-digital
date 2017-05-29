$(window).resize(function () {
	if ($(this).width() >= 1200) {
		$('.ba-about-us-left').removeClass('col-sm-offset-2 col-md-offset-2');
		$('.ba-about-us-right').removeClass('col-sm-offset-2 col-md-offset-2');
		$('.ba-about-us__button').removeClass('btn-block');
		$('.ba-works-btn').removeClass('btn-block');
	} else if ($(this).width() < 1200 && $(this).width() >= 992) {
		$('.ba-about-us-left').addClass('col-md-offset-2');
		$('.ba-about-us-right').removeClass('pull-right').addClass('col-md-offset-2');
		$('.ba-about-us__button').removeClass('btn-block');
		$('.ba-works-btn').removeClass('btn-block');
	} else if ($(this).width() < 992 && $(this).width() >= 768) {
		$('.ba-about-us-left').addClass('col-sm-offset-2');
		$('.ba-about-us-right').addClass('col-sm-offset-2');
		$('.ba-about-us__button').removeClass('btn-block');
		$('.ba-works-btn').removeClass('btn-block');
	} else if ($(this).width() < 768) {
		$('.ba-about-us__button').addClass('btn-block');
		$('.ba-works-btn').addClass('btn-block');
	}
});


