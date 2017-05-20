/* =Main INIT Function
-------------------------------------------------------------- */
function initializeBold() {
	"use strict";

	//VIDEO
	// Exclude the iPad
	Modernizr.addTest('ipad', function () {
	return !!navigator.userAgent.match(/iPad/i);
	});
	// Exclude the iPhone
	Modernizr.addTest('iphone', function () {
	return !!navigator.userAgent.match(/iPhone/i);
	});
	// Exclude the iPod touch
	Modernizr.addTest('ipod', function () {
	return !!navigator.userAgent.match(/iPod/i);
	});
	// Exclude android phones and tablets
	Modernizr.addTest('android', function () {
	return !!navigator.userAgent.match(/android/i);
	});
	// Add a  test to Modernizr combining all platforms
	Modernizr.addTest('excludedplatforms', function () {
	return (Modernizr.ipad || Modernizr.ipod || Modernizr.iphone || Modernizr.android);
	});

	if (!Modernizr.excludedplatforms) {

	 $(function() {
	    var videobackground = new $.backgroundVideo($('#bgVideo'), {
	        "align" : "centerX",
	        "path" : "video/",
	        "width": 854,
	        "height": 480,
	        "filename" : "picked-demo",
	        "types" : ["mp4"]
	    });
	});
	} else {
		$('.hero').addClass('no-video');
	}

	//LOCAL SCROLL
    $('.hero').localScroll({
		offset: -60,
		duration:1000
	});

	//TRIGGER ANIMATIONS
	var wow = new WOW(
	  {
	    mobile: false
	  }
	);
	wow.init();

	//SLIDER
	$("#slider").owlCarousel({
		items: 3,
		itemsDesktop: [1199,3],
		itemsDesktopSmall: [977,2],
		itemsTablet: [767,1],
		navigation: true,
		navigationText: ["prev","next"],
		pagination: false,
		rewindNav: true
	});

	//SUBSCRIBE
	$(function($) {
		$('body').on('click','#subscribe',function(){$.ajax({'type':'POST','success':function(data) {
									
		var error = $('.notification.error');
		var success = $('.notification.success');
		if(data == 1) {
			success.css('opacity', 0);
			success.slideDown(300);
			success.animate({
				opacity : 1
			}, 300);
			error.hide()
		} else {
			error.css('opacity', 0);
			error.slideDown(300);
			error.animate({
				opacity : 1
			}, 300);
			success.hide()
		} 
		},
		'url':'form.php',		  
		'cache': false,
		'data': $(this).parents("form").serialize()});return false;});
	});

// feature image
	setInterval(function () {
		var activeImage = $('.feat-image.active')[0]
		var images = $('.feat-image').toArray()

		$(activeImage).removeClass('active')
		$(images[(images.indexOf(activeImage) + 1) % images.length]).addClass('active')
	}, 1500);

};
/* END ------------------------------------------------------- */

/* =Document Ready Trigger
-------------------------------------------------------------- */
$(document).ready(function(){

	initializeBold();

});
/* END ------------------------------------------------------- */


/* =Window Load Trigger
-------------------------------------------------------------- */
$(window).load(function(){
	
	//SKROLLR 
    if (Modernizr.touch) {
        skrollr.init().destroy();
    } else {   
        skrollr.init({
        	forceHeight: false
        });  
    }
    
});
/* END ------------------------------------------------------- */


