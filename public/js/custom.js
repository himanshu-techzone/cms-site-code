$(window).scroll(function() {
   if($(window).scrollTop() + $(window).height() > $(document).height() - 1000) {
   $('.sectionsLinks').removeClass('fixed');
   }else{
var sticky = $('header');
var srvcTab = $('.sectionsLinks');
    scroll = $(window).scrollTop();
if (scroll >= 50) sticky.addClass('fixed');
else sticky.removeClass('fixed');
if (scroll >= 980) srvcTab.addClass('fixed');
else srvcTab.removeClass('fixed');
   }
});

// Mobile Menu
(function ($) {
"use strict";
if ($('.main-nav').length) {
var $mobile_nav = $('.main-nav').clone().prop({
class: 'mobile-nav d-lg-none'
});
$('body').append($mobile_nav);
$('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="fa fa-bars"></i></button>');
$('body').append('<div class="mobile-nav-overly"></div>');

$(document).on('click', '.mobile-nav-toggle', function(e) {
$('body').toggleClass('mobile-nav-active');
$('.mobile-nav-toggle i').toggleClass('fa-times fa-bars');
$('.mobile-nav-overly').toggle();
});
$(document).on('click', '.mobile-nav .drop-down > a', function(e) {
e.preventDefault();
$(this).next().slideToggle(300);
$(this).parent().toggleClass('active');
});
$(document).click(function(e) {
var container = $(".mobile-nav, .mobile-nav-toggle");
if (!container.is(e.target) && container.has(e.target).length === 0) {
if ($('body').hasClass('mobile-nav-active')) {
$('body').removeClass('mobile-nav-active');
$('.mobile-nav-toggle i').toggleClass('fa-times fa-bars');
$('.mobile-nav-overly').fadeOut();
}
}
});
} else if ($(".mobile-nav, .mobile-nav-toggle").length) {
$(".mobile-nav, .mobile-nav-toggle").hide();
}
})(jQuery);
// Menu 
$(document).ready(function() {
$(window).resize(function(){
if ($(window).width() >= 980){  
$(".navbar .dropdown-toggle").hover(function () {
$(this).parent().toggleClass("show");
$(this).parent().find(".dropdown-menu").toggleClass("show"); 
});
$( ".navbar .dropdown-menu" ).mouseleave(function() {
$(this).removeClass("show");  
});
} 
});  
});

/*---- scroll to top----*/
$(document).ready(function(){ 
$(window).scroll(function(){ 
if ($(this).scrollTop() > 100) { 
$('#scroll').fadeIn(); 
} else { 
$('#scroll').fadeOut(); 
} 
}); 
$('#scroll').click(function(){ 
$("html, body").animate({ scrollTop: 0 }, 600); 
return false; 
}); 
});


// AOS.init({
// duration:1200,
// });