//= ../../bower_components/jquery/dist/jquery.js
$(document).ready(function () {
	var sidebar = $('.sidebar');
	$('.menu_item').hover(function() {
		$(this).addClass('pulse');
	},function() {
		$(this).removeClass('pulse');
	});

	$('.sidebar-btn-line').click(function() {
		$('.sidebar').slideToggle(500);
	});
	$('.sidebar li').click(function() {
		if(window.matchMedia('(max-width: 767px)').matches) {
			sidebar.slideUp(500);
		}
		
	});
	$(window).resize(function() {
		if(window.matchMedia('(min-width: 768px)').matches) {
			sidebar.css({'display':'block'});
		}
		if(window.matchMedia('(max-width: 767px)').matches) {
			sidebar.css({'display':'none'});
		}
	});

	$('.sidebar_close').click(function() {
		sidebar.slideUp(500);
	})

});