$(document).ready(function(){
  $('.banner_slick').slick({
    arrows: true,
    infinite:false,
    speed: 1000,
    draggable: false,
    waitForAnimate: true,
    mobileFirst: true,
   });
   $('.clients_content').slick({
   	arrows: true,
   	infinite:false,
   	speed: 1000,
    draggable: false,
    swipe: false,
    waitForAnimate: true,
    asNavFor: ".clients_content2",
    mobileFirst: true,
   });
   $('.clients_content2').slick({
   	move: false,
    scroll: false,
   	focus: false,
   	asNavFor: ".clients_content",   	
   	arrows: false,
   	infinite:false,
   	slidesToShow: 3,
   	slideToScroll: false,
   	waitForAnimate: true,
    
   	speed: 1000,
    dots: true,
   });
   $("[data-scroll]").on("click", function(event) {
   	event.preventDefault();

   	let blockId = $(this).data('scroll'),
   	blockOffset = $(blockId).offset().top;

   	$("html, body").animate({
   		scrollTop: blockOffset
   	}, 500);
   });
});
   $('.header_burger').click(function(event){
   	$('.header_burger,.header_menu').toggleClass('active');
   	$('body').toggleClass('lock');
});
