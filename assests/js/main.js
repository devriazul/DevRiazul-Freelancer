// Preloader 
function load() {

	var loading = document.getElementsByClassName('preloader');

	loading[0].style.display = "none";
}

$(document).ready(function () {

	// Sticky Menu
	$(window).scroll(function () {

		if ($(this).scrollTop() > 50) {
			$('.nav').addClass('sticky');
		} else {
			$('.nav').removeClass('sticky');
		}

	});

	// Scroll to Top
	$(window).scroll(function () {

		if ($(this).scrollTop() > 100) {
			$('.scroll-top').fadeIn();
		} else {
			$('.scroll-top').fadeOut();
		}

	});


	// Type js
	var typed = new Typed('.element', {
		strings: ["Web Designer.", "Web Developer.", "Webview App Developer.", "Web Application Developer."],
		typeSpeed: 80,
		loop: true,
		backSpeed: 80,
		showCursor: false
	});

	// Skill Bar
	$('#bar1').barfiller({
		barColor: '#e21e51',
		tooltip: false,
		duration: 3000,
		animateOnResize: true
	});
	$('#bar2').barfiller({
		barColor: '#e21e51',
		tooltip: false,
		duration: 3000
	});
	$('#bar3').barfiller({
		barColor: '#e21e51',
		tooltip: false,
		duration: 3000
	});
	$('#bar4').barfiller({
		barColor: '#e21e51',
		duration: 3000,
		tooltip: false
	});
	$('#bar5').barfiller({
		barColor: '#e21e51',
		tooltip: false,
		duration: 3000
	});
	$('#bar6').barfiller({
		barColor: '#e21e51',
		tooltip: false,
		duration: 3000
	});


});