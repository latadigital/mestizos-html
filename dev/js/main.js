$(document).ready(function() {
	var win = $(window).width();
	if (win < 1050) {
	}

	$('.overlay').click(function(e){
		$('.overlay').css('display', 'none');
		$('.c-header__navMobile').removeClass('c-header__navMobile--active');		
		e.preventDefault();
		e.stopPropagation();
	});

	$('#open-nav').click(function(){
		$('.overlay').css('display', 'block');
		$('.c-header__navMobile').addClass('c-header__navMobile--active');

		e.preventDefault();
	});
});

