(function ($) {
	"use strict";

	////////////////////////////////////////////////////
	// 03. Search Js
	$(".search-open-btn").on("click", function () {
		$(".search__popup").addClass("search-opened");
	});

	
	$(".search-close-btn").on("click", function () {
		$(".search__popup").removeClass("search-opened");
	});
	
	$(".job-form-open-btn").on("click", function () {
		$(".job__form").slideToggle("job__form");
	});

	$('.tp-custom-accordion .accordion-items').on("click", function(){
		$(this).addClass('tp-faq-active').siblings().removeClass('tp-faq-active');
	});  

	var windowOn = $(window)
	///////////////////////////////////////////////////
	// 01. PreLoader Js
	windowOn.on('load',function () {
		$('#loading').fadeOut(500);
	});

	///////////////////////////////////////////////////
	// 02. SubMenu Dropdown Toggle
	if ($('.tp-main-menu nav > ul > li.has-dropdown > a').length) {
		$('.tp-main-menu nav > ul > li.has-dropdown > a').append('<i class="fal fa-angle-down"></i>');
	}

    ///////////////////////////////////////////////////
	// 03. scroll-to-target 
	windowOn.on('scroll', function () {
		var scroll = windowOn.scrollTop();
		if (scroll < 500) {
			$('.scroll-to-target').removeClass('open');

		} else {
			$('.scroll-to-target').addClass('open');
		}
	});
	
	///////////////////////////////////////////////////
	// 04. Scroll Up Js
	if ($('.scroll-to-target').length) {
		$(".scroll-to-target").on('click', function () {
		var target = $(this).attr('data-target');
		// animate
		$('html, body').animate({
			scrollTop: $(target).offset().top
		}, 1000);
	
		});
	}

	// 04. Scroll Up Js
	if ($('.scroll-to-target-2').length) {
		$(".scroll-to-target-2").on('click', function () {
		var target = $(this).attr('data-target');
		// animate
		$('html, body').animate({
			scrollTop: $(target).offset().top
		}, 1000);
	
		});
	}
	function smoothSctollTop() {
		$('.smooth a').on('click', function (event) {
			var target = $(this.getAttribute('href'));
			if (target.length) {
				event.preventDefault();
				$('html, body').stop().animate({
					scrollTop: target.offset().top - 150
				}, 1000);
			}
		});
	}
	smoothSctollTop();
	

	///////////////////////////////////////////////////
	// 06. PreLoader Js
	windowOn.on('load',function() {
		$("#preloader").fadeOut(500);

	});

	///////////////////////////////////////////////////
	// 07. Sticky Header Js
	windowOn.on('scroll', function () {
		var scroll = windowOn.scrollTop();
		if (scroll < 400) {
			$("#header-sticky").removeClass("header-sticky");
		} else {
			$("#header-sticky").addClass("header-sticky");
		}
	});

	////////////////////////////////////////////////////
	// 08. Mobile Menu Js
	$('#mobile-menu').meanmenu({
		meanMenuContainer: '.mobile-menu',
		meanScreenWidth: "991",
		meanExpand: ['<i class="fal fa-plus"></i>'],
	});
	////////////////////////////////////////////////////
	// 08. Mobile Menu Js
	$('#mobile-menu-2').meanmenu({
		meanMenuContainer: '.mobile-menu',
		meanScreenWidth: "6000",
		meanExpand: ['<i class="fal fa-plus"></i>'],
	});


	
	$(window).on('load', function () {

		$('#preloader').delay(350).fadeOut('slow');

		$('body').delay(350).css({ 'overflow': 'visible' });

	})

	////////////////////////////////////////////////////
	// 09. Sidebar Js
	$(".tp-menu-bar").on("click", function () {
		$(".tpoffcanvas").addClass("opened");
		$(".body-overlay").addClass("apply");
	});
	$(".close-btn").on("click", function () {
		$(".tpoffcanvas").removeClass("opened");
		$(".body-overlay").removeClass("apply");
	});
	$(".body-overlay").on("click", function () {
		$(".tpoffcanvas").removeClass("opened");
		$(".body-overlay").removeClass("apply");
	});

	///////////////////////////////////////////////////
	// 10. Magnific Js
	$(".popup-video").magnificPopup({
		type: "iframe",
	});

	////////////////////////////////////////////////////
	// 11. Data CSS Js
	$("[data-background").each(function () {
		$(this).css("background-image", "url( " + $(this).attr("data-background") + "  )");
	});

	$("[data-width]").each(function () {
		$(this).css("width", $(this).attr("data-width"));
	});

	$("[data-bg-color]").each(function () {
		$(this).css("background-color", $(this).attr("data-bg-color"));
	});

	////////////////////////////////////////////////////
	// 12. Counter Js
	$('.counter').counterUp({
		delay: 10,
		time: 1000
	});


	////////////////////////////////////////////////////
	// 13. Swiper Js
	const serviceswiper = new Swiper('.tp-project__slider-active', {
		// Optional parameters
		loop: true,
		slidesPerView: 3,
        spaceBetween: 30,
		breakpoints: {
			'1200': {
				slidesPerView: 3,
			},
			'992': {
				slidesPerView: 1,
			},
			'768': {
				slidesPerView: 1,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},

		  // scrollbar
		  scrollbar: {
			el: ".tp-scrollbar",
			clickable: true,
		},
	  });

	////////////////////////////////////////////////////

	// 13. Swiper Js
	const testiswiper = new Swiper('.testimonial-five-slider-active', {
		// Optional parameters
		loop: true,
		slidesPerView: 4,
        spaceBetween: 30,
		arrows:true,
		breakpoints: {
			'1200': {
				slidesPerView: 4,
			},
			'992': {
				slidesPerView: 3,
			},
			'768': {
				slidesPerView: 3,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},

		  // scrollbar
		  scrollbar: {
			el: ".tp-scrollbar",
			clickable: true,
		},
		// Navigation arrows
		navigation: {
			nextEl: '.test-prev',
			prevEl: '.test-next',
		},
	  });


	// 13. Swiper Js
	const gridswiper = new Swiper('.blog-grid-slider-active', {
		// Optional parameters
		loop: true,
		slidesPerView: 1,
		effect:'fade',
		arrows:true,
		breakpoints: {
			'1200': {
				slidesPerView: 1,
			},
			'992': {
				slidesPerView: 1,
			},
			'768': {
				slidesPerView: 1,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
		// Navigation arrows
		navigation: {
			nextEl: '.grid-next',
			prevEl: '.grid-prev',
		},
	  });


	// 13. Swiper Js
	const journeyswiper = new Swiper('.journey-slider-active', {
		// Optional parameters
		loop: true,
		slidesPerView: 5,
        spaceBetween: 30,
		breakpoints: {
			'1200': {
				slidesPerView: 5,
			},
			'992': {
				slidesPerView: 3,
			},
			'768': {
				slidesPerView: 2,
			},
			'576': {
				slidesPerView: 2,
			},
			'0': {
				slidesPerView: 1,
			},
		},

		  // scrollbar
		  scrollbar: {
			el: ".tp-scrollbar",
			clickable: true,
		},
	  });


	// 13. Swiper Js
	const blogdetailswiper = new Swiper('.blog-slider-active', {
		// Optional parameters
		loop: true,
		slidesPerView: 3,
        spaceBetween: 30,
		breakpoints: {
			'1200': {
				slidesPerView: 3,
			},
			'992': {
				slidesPerView: 2,
			},
			'768': {
				slidesPerView: 2,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},

	});


	// Product Related Slider Drag Events
	serviceswiper.on('sliderMove', function(slider, ev){
		slider.$el.addClass('dragged')
	})

	serviceswiper.on('transitionEnd', function(slider){
		slider.$el.removeClass('dragged')
	})

	// Product Related Slider Drag Events
	journeyswiper.on('sliderMove', function(slider, ev){
		slider.$el.addClass('dragged')
	})

	journeyswiper.on('transitionEnd', function(slider){
		slider.$el.removeClass('dragged')
	})

	// Product Related Slider Drag Events
	testiswiper.on('sliderMove', function(slider, ev){
		slider.$el.addClass('dragged')
	})

	testiswiper.on('transitionEnd', function(slider){
		slider.$el.removeClass('dragged')
	})


	  	// testimonial
		$('.tp-testimonial__slider-active').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			fade: false,
			asNavFor: '.tp-testimonial__img-active'
		});
		
			$('.tp-testimonial__img-active').slick({	
			slidesToShow: 5,
			slidesToScroll: 1,
			asNavFor: '.tp-testimonial__slider-active',
			dots: false,
			arrows: false,
			focusOnSelect: true,
			centerPadding: '0',
			centerMode: true,
			responsive: [
				{
					breakpoint: 1200,
					settings: {
						slidesToShow: 5,
					}
				},
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 3,
					}
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 2,
					}
				},
				{
					breakpoint: 480,
					settings: {
						arrows: false,
						slidesToShow: 1,
					}
				}
				
			]
		});

		$('.tp-testimonial-2-slider-active').slick({	
			slidesToShow: 3,
			slidesToScroll: 1,
			dots: false,
			arrows: false,
			dots:true,
			responsive: [
				{
					breakpoint: 1200,
					settings: {
						slidesToShow: 3,
					}
				},
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 2,
					}
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 1,
					}
				},
				{
					breakpoint: 576,
					settings: {
						slidesToShow: 1,
					}
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
					}
				}
				
			]
		});

		$('.tp-testimonial-3-slider-active').slick({	
			slidesToShow: 4,
			slidesToScroll: 1,
			dots: false,
			arrows: true,
			prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-angle-left"></i></button>',
			nextArrow: '<button type="button" class="slick-next"><i class="fal fa-angle-right"></i></button>',
			appendArrows: $(".tp-test-arrow"),
			responsive: [
				{
					breakpoint: 1200,
					settings: {
						slidesToShow: 4,
					}
				},
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 3,
					}
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 1,
					}
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
					}
				}
				
			]
		});


	// 09. Home-1-Slider js
	$('.tp-integration-slider-active').slick({
		speed: 12000,
		autoplay: true,
		autoplaySpeed: 0,
		centerMode: true,
		cssEase: 'linear',
		slidesToShow: 1,
		slidesToScroll: 1,
		variableWidth: true,
		infinite: true,
		initialSlide: 1,
		arrows: false,
		buttons: false,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
				}
			},
			{
				breakpoint: 992,
				settings: {
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});

	// 09. Home-1-Slider js
	$('.tp-integration-slider-active-2').slick({
		speed: 12000,
		autoplay: true,
		autoplaySpeed: 0,
		centerMode: true,
		cssEase: 'linear',
		slidesToShow: 1,
		slidesToScroll: 1,
		variableWidth: true,
		infinite: true,
		initialSlide: 1,
		arrows: false,
		buttons: false,
		rtl: true,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
				}
			},
			{
				breakpoint: 992,
				settings: {
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});

	// 09. Home-1-Slider js
	$('.footer-slide-active').slick({
		speed: 7000,
		autoplay: true,
		autoplaySpeed: 0,
		centerMode: true,
		cssEase: 'linear',
		slidesToShow: 1,
		slidesToScroll: 1,
		variableWidth: true,
		infinite: true,
		initialSlide: 1,
		arrows: false,
		buttons: false,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
				}
			},
			{
				breakpoint: 992,
				settings: {
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});
	// 09. Home-1-Slider js
	$('.tp-security-slider-active').slick({
		speed: 7000,
		autoplay: true,
		autoplaySpeed: 0,
		centerMode: true,
		cssEase: 'linear',
		slidesToShow: 1,
		slidesToScroll: 1,
		variableWidth: true,
		infinite: true,
		initialSlide: 1,
		arrows: false,
		buttons: false,
		focusOnSelect: true,
		pauseOnHover:true,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
				}
			},
			{
				breakpoint: 992,
				settings: {
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});


	// 09. Home-1-Slider js
	$('.tp-barnd-slider-active').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-angle-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fal fa-angle-right"></i></button>',
		responsive: [
			{
				breakpoint: 1400,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});
	// 09. Home-1-Slider js
	$('.barnd-slider-active-five').slick({
		slidesToShow: 6,
		slidesToScroll: 1,
		dots: false,
		arrows: false,
		autoplay:true,
		responsive: [
			{
				breakpoint: 1400,
				settings: {
					slidesToShow: 5,
				}
			},
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 5,
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});

	function mediaSize() { 
		/* Set the matchMedia */
		if (window.matchMedia('(min-width: 768px)').matches) {
			const panels = document.querySelectorAll('.col-custom')
			panels.forEach(panel => {
				panel.addEventListener('click', () => {
					removeActiveClasses()
					panel.classList.add('active')
				})
			})
		
			function removeActiveClasses() {
				panels.forEach(panel => {
					panel.classList.remove('active')
				})
			}

		} else {
		/* Reset for CSS changes – Still need a better way to do this! */
			$(".col-custom ").addClass("active");
		}
	};
	/* Call the function */
		mediaSize();
	/* Attach the function to the resize event listener */
	  window.addEventListener('resize', mediaSize, false); 


	  if ($('.tp-header-height').length > 0) {
		var headerHeight = document.querySelector(".tp-header-height");      
		var setHeaderHeight = headerHeight.offsetHeight;	
		$(".tp-header-height").each(function () {
			$(this).css({
				'height' : setHeaderHeight + 'px'
			});
		});
				
		$(".tp-header-height.header-sticky").each(function () {
			$(this).css({
				'height' : inherit,
			});
		});
	  }
	



	////////////////////////////////////////////////////
	// 14. magnificPopup Js
	$('.popup-image').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		}
	});


	// 20. Show Login Toggle Js
	$('#showlogin').on('click', function () {
		$('#checkout-login').slideToggle(900);
	});

	/*-------------------------

		showcoupon toggle function

	--------------------------*/

	$('#showcoupon').on('click', function () {

		$('#checkout_coupon').slideToggle(900);

	});



	////Create an account toggle function

	$('#cbox').on('click', function () {

		$('#cbox_info').slideToggle(900);

	});



   ///Create an account toggle function

	$('#ship-box').on('click', function () {

		$('#ship-box-info').slideToggle(1000);

	});


		////////////////////////////////////////////////////
		// 15. MagnificPopup video view Js
		$(".popup-video").magnificPopup({
		type: "iframe",
		});

		// 05. Search Js
		$(".tp-search-box").on("click", function () {
			$(".search-wrapper").toggleClass("search-open");
		});
		$("body > *:not(header)").on("click", function () {
			$(".search-wrapper").removeClass("search-open");
		});
		
		// 05. Search Js
		$(".accordion-items").on("click", function () {
			$(".accordion-items").toggleClass("open");
		});
		$(".accordion-items").on("click", function () {
			$(".accordion-items").removeClass("open");
		});



	// for footer
	if ($("#tp-copyright__lang-toggle").length > 0) {
		window.addEventListener('click', function(e){
		
			if (document.getElementById('tp-copyright__lang-toggle').contains(e.target)){
				$(".tp-copyright__lang-submenu").toggleClass("open");
			}
			else{
				$(".tp-copyright__lang-submenu").removeClass("open");
			}
		});
	}


	// for footer
	if ($("#header-bottom__lang-toggle").length > 0) {
		window.addEventListener('click', function(e){
		
			if (document.getElementById('header-bottom__lang-toggle').contains(e.target)){
				$(".header-bottom__lang-submenu").toggleClass("open");
			}
			else{
				$(".header-bottom__lang-submenu").removeClass("open");
			}
		});
	}

	////////////////////////////////////////////////////
	// 16. Cart Quantity Js
	$('.cart-minus').on('click', function () {
		var $input = $(this).parent().find('input');
		var count = parseInt($input.val()) - 1;
		count = count < 1 ? 1 : count;
		$input.val(count);
		$input.change();
		return false;
	});

	$('.cart-plus').on('click', function () {
		var $input = $(this).parent().find('input');
		$input.val(parseInt($input.val()) + 1);
		$input.change();
		return false;
	});


	/* Price filter active */

	if ($("#slider-range").length) {

		$("#slider-range").slider({

			range: true,

			min: 0,

			max: 500,

			values: [75, 300],

			slide: function (event, ui) {

				$("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);

			}

		});

		$("#amount").val("$" + $("#slider-range").slider("values", 0) +

			" - $" + $("#slider-range").slider("values", 1));

		$('#filter-btn').on('click', function () {

			$('.filter-widget').slideToggle(1000);

		});

	}
	
	// 08. Nice Select Js
	$('select').niceSelect();
	const tilt = $('.js-tilt').tilt({
		maxTilt:        10,
		perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
		easing:         "cubic-bezier(.03,.98,.52,.999)",    // Easing on enter/exit.
		scale:          1,      // 2 = 200%, 1.5 = 150%, etc..
		speed:          300,    // Speed of the enter/exit transition.
		transition:     true,   // Set a transition on enter/exit.
		disableAxis:    null,   // What axis should be disabled. Can be X or Y.
		reset:          true,   // If the tilt effect has to be reset on exit.
		glare:          false,  // Enables glare effect
		maxGlare: 1
	});

	////////////////////////////////////////////////////
	// 14. back to top
	$('.tp-btn-hover')
		.on('mouseenter', function (e) {
			var parentOffset = $(this).offset(),
				relX = e.pageX - parentOffset.left,
				relY = e.pageY - parentOffset.top;
			$(this).find('b').css({ top: relY, left: relX })
		})
	$('.tp-btn-hover').on('mouseout', function (e) {

		var parentOffset = $(this).offset(),
			relX = e.pageX - parentOffset.left,
			relY = e.pageY - parentOffset.top;
		$(this).find('b').css({ top: relY, left: relX })

	});


	////////////////////////////////////////////////////
	//26.isotope
	$('.grid').imagesLoaded(function () {
		// init Isotope
		var $grid = $('.grid').isotope({
			itemSelector: '.grid-item',
			percentPosition: true,
			layoutMode: 'fitRows',
			masonry: {
				columnWidth: 1,
			},
			
		});
		// filter items on button click
		$('.masonary-menu').on('click', 'button', function () {
			var filterValue = $(this).attr('data-filter');
			$grid.isotope({ 
				filter: filterValue,
				animationOptions: {
					duration: 1000,
					easing: "linear",
					queue: false
				}
			});
			
		});
		//for menu active class
		$('.masonary-menu button').on('click', function (event) {
			$(this).siblings('.active').removeClass('active');
			$(this).addClass('active');
			event.preventDefault();
		});

	});


    ////////////////////////////////////////////////////
	// 21. Counter Js
	if ($(".purecounter").length) {
		new PureCounter({
			filesizing: true,
			selector: ".filesizecount",
			pulse: 2,
		});
		new PureCounter();
	}

	$(".job-form-open-btn").on("click", function () {
		$(".job__form").slideToggle("job__form");
	});

	$('#my-btn').on('click', function(){
		$(this).slideToggle(900);
		$('#show').slideDown(900);
	});

	///////////////////////////////////////////////
	// 05. wow animation
	if ($('.wow').length > 0) {
		var wow = new WOW(
			{
			mobile: true,
			}
		);
		wow.init();
		var windowOn = $(window);
	}

	if ($('#smooth-wrapper').length > 0) {
		///////////////////////////////////////////////////
		gsap.registerPlugin(ScrollSmoother);
		let smoother = ScrollSmoother.create({
			wrapper : '#smooth-wrapper',
			content : '#smooth-content',
			smooth: .8,
			effects: true        
		})
    }

   if ($('.tp-gsap-bg').length > 0) {
		gsap.set(".tp-gsap-bg", {scaleX : 1} );
		let mm = gsap.matchMedia();
		mm.add("(min-width:1400px)", () => {
			gsap.to(".tp-gsap-bg", {
				scrollTrigger: {
					trigger: ".tp-gsap-bg",
					scrub: 0.02,
					start:"top bottom",
					end: "bottom bottom",
				},
				scaleX: .95,
				borderRadius: "30px",
				transformOrigin: "center center", 
				ease: "none",
			});
		})
    }



   if ($('.tp-hero-bg-single').length > 0) {
		gsap.registerPlugin(ScrollTrigger);
		gsap.from(".tp-hero-bg-single", {
			scale:1.2,
			duration:1.5
		});
   }



if ($('.tp-header-top-animation').length > 0) {
	gsap.set(".tp-header-top-animation", {
		opacity: 0,
		y: '20px'
	});
	gsap.to(".tp-header-top-animation", {
		opacity:1,
		y: '0px',
		delay: 1.05
	});
}

	if ($('.pr-feature-box').length > 0) {
		ScrollTrigger.create({
			trigger: ".pr-feature-box",
			start: "top 80px",
			end: "bottom 54%",
			pin: ".pr-feature-wrapper",
			pinSpacing: false,
		});
	}


	if ($('.social-box-pin').length > 0) {
	ScrollTrigger.create({
		trigger: ".social-box-pin",
		start: "top 10%",
		end: "bottom 60%",
		pin: ".social-box-pin",
		pinSpacing: false
	  });
	}
	
	if ($('.sv-details-widget').length > 0) {
	ScrollTrigger.create({
		trigger: ".sv-details-widget",
		start: "top 5%",
		end: "bottom 70%",
		pin: ".sv-details-widget",
		pinSpacing: false
	  });
	}

	// Home One Hero Animation 
	let HomeDigital = gsap.timeline()
	let HomeDigitalImage = gsap.timeline()
	let hero7_thum_anim = document.querySelector(".hero7__thum-anim")
	if (hero7_thum_anim) {
    let hero7_thumb_1 = document.querySelector(".image-1")
    let hero7_thumb_2 = document.querySelector(".image-2")
    let hero7_thumb_3 = document.querySelector(".image-3")
    let hero7_thumb_4 = document.querySelector(".image-4")

    gsap.from(".image-1", {
      x: 65,
      yPercent: 100,
      opacity: 0,
      duration: 2,
      delay: 1
    })

    gsap.from(".image-2", {
      delay: 1.5,
      scale: 0,
      duration: 1.5
    })

    gsap.from(".image-3", {
      x: 65,
      yPercent: -100,
      duration: 2,
      opacity: 0,
      delay: 1
    })
    gsap.from(".image-4", {
      xPercent: -100,
      yPercent: -100,
      duration: 2,
      opacity: 0,
      delay: 1
    })

  }


	if ($('.hero-text-anim').length > 0) {
		let tl = gsap.timeline({default:{ease:"SlowMo.easeOut"}});
		tl.to(".hero-text-anim i.child-1", {y: "0px", duration: 1, opacity:1, stagger:0.3, delay:.5});
	}

	if ($('.hero-text-anim-2').length > 0) {
		let tl = gsap.timeline({default:{ease:"SlowMo.easeOut"}});
		tl.to(".hero-text-anim-2 i.child-2", {y: "0px", duration: .9, opacity:1, stagger:0.3, delay:.3});
	}

	if ($('.tp-title-anim').length > 0) {
		// 25. Title Animation
		let splitTitleLines = gsap.utils.toArray(".tp-title-anim");
		splitTitleLines.forEach(splitTextLine => {
			const tl = gsap.timeline({
			scrollTrigger: {
				trigger: splitTextLine,
				start: 'top 90%',
				end: 'bottom 60%',
				scrub: false,
				markers: false,
				toggleActions: 'play none none none'
			}
			});

			const itemSplitted = new SplitText(splitTextLine, { type: "words, lines" });
			gsap.set(splitTextLine, { perspective: 300});
			itemSplitted.split({ type: "lines" })
			tl.from(itemSplitted.lines, { duration: 1, delay: 0.3, opacity: 0, rotationX: -60, force3D: true, transformOrigin: "top center -50", stagger: 0.2 });
		});	
	}

	if ($('.tp-char-animation').length > 0) {
		// 25. Title Animation
		let char_come = gsap.utils.toArray(".tp-char-animation");
		char_come.forEach(splitTextLine => {
			const tl = gsap.timeline({
			scrollTrigger: {
				trigger: splitTextLine,
				start: 'top 90%',
				end: 'bottom 60%',
				scrub: false,
				markers: false,
				toggleActions: 'play none none none'
			}
			});

			const itemSplitted = new SplitText(splitTextLine, { type: "chars, words" });
			gsap.set(splitTextLine, { perspective: 300});
			itemSplitted.split({ type: "chars, words"})
			tl.from(itemSplitted.chars, 
				{
					duration: 1,
					x: 100,
					autoAlpha: 0,
					stagger: 0.05 
				});
		});	
	}

	if ($('.tp-char-animation-2').length > 0) {
		// 25. Title Animation
		let char_come = gsap.utils.toArray(".tp-char-animation-2");
		char_come.forEach(splitTextLine => {
			const tl = gsap.timeline({
			scrollTrigger: {
				trigger: splitTextLine,
				start: 'top 90%',
				end: 'bottom 60%',
				scrub: false,
				markers: false,
				toggleActions: 'play none none none'
			}
			});

			const itemSplitted = new SplitText(splitTextLine, { type: "chars, words" });
			gsap.set(splitTextLine, { perspective: 300});
			itemSplitted.split({ type: "chars, words"})
			tl.from(itemSplitted.chars, 
				{
					duration: .7,
					opacity: 0,
					scale: 0,
					y: 60,
					delay: .7,
					rotationX: 180,
					transformOrigin: "0% 30% -30%",
					stagger: 0.01
				});
		});	
	}


	if ($('.tp-intigration-area').length > 0) {
		// Testimonial 3 Image Animation
		gsap.set(".tp-zoom-thumb img", { scale: 0 });
		gsap.to(".tp-zoom-thumb img", {
			scrollTrigger: {
			trigger: ".tp-intigration-area",
			start: "top center+=200",
			markers: false
			},
			scale: 1,
			x: 20,
			ease: "power2.out",
			duration: 3,
		})
	}

	
	$(".tp-cursor-point-area").on("mouseenter", function () {
		$(".mouseCursor").addClass("cursor-big");
	});

	$(".tp-cursor-point-area").on("mouseleave", function () {
		$(".mouseCursor").removeClass("cursor-big");
	});
	$(".tp-cursor-point-area").on("mouseleave", function () {
		$(".mouseCursor").removeClass("cursor-big");
	});


	// 11. Mouse Custom Cursor
	function itCursor() {
		var myCursor = jQuery(".mouseCursor");
		if (myCursor.length) {
			if ($("body")) {
				const e = document.querySelector(".cursor-inner"),
					t = document.querySelector(".cursor-outer");
				let n,
					i = 0,
					o = !1;
				(window.onmousemove = function(s) {
					o ||
						(t.style.transform =
							"translate(" + s.clientX + "px, " + s.clientY + "px)"),
						(e.style.transform =
							"translate(" + s.clientX + "px, " + s.clientY + "px)"),
						(n = s.clientY),
						(i = s.clientX);
				}),
				$("body").on("mouseenter", "button, a, .cursor-pointer", function() {
						e.classList.add("cursor-hover"), t.classList.add("cursor-hover");
					}),
					$("body").on("mouseleave", "button, a, .cursor-pointer", function() {
						($(this).is("a", "button") &&
							$(this).closest(".cursor-pointer").length) ||
						(e.classList.remove("cursor-hover"),
							t.classList.remove("cursor-hover"));
					}),
					(e.style.visibility = "visible"),
					(t.style.visibility = "visible");
			}
		}
	}
	itCursor();


	/* video controls*/
	if ($('#myVideo').length > 0) {
		var vid = document.getElementById("myVideo"); 
		var status = false;
		$('.play-video').on('click', function (){
	
			if(status == false){
				vid.play();
				status = true;
			}else{
				vid.pause(); 
				status = false;
			}
	
		});
	};

	$('#click').on('click', function (){
		$(this).toggleClass('open');
		var x = document.getElementById("myInput");
			if (x.type === "password") {
			   x.type = "text";
			} else {
			   x.type = "password";
			}
	});


	if ($('#myInput').length > 0) {
		function myFunction() {
			var x = document.getElementById("myInput");
			if (x.type === "password") {
			   x.type = "text";
			} else {
			   x.type = "password";
			}
		}
	}


})(jQuery);