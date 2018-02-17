$(document).ready(function() {
	$('.nav-button, .nav-close').click(function(e) {
			$('body, .main-header, .nav-wrap, .nav-overlay, .nav-button').toggleClass('nav-open nav-closed');
	});
});
