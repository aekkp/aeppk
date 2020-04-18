$(document).ready(function(){
	$("[data-scroll]").on("click", function(event) {
	event.preventDefault();

	let blockId = $(this).data('scroll'),
	blockOffset = $(blockId).offset().top;

	$("html, body").animate({
		scrollTop: blockOffset
		}, 500);
	});
	$('.burger_menu').click(function(event) {
		$('.burger_menu,.nav_nav').toggleClass('active');
	});
});