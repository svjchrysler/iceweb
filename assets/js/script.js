$(document).ready(function() {
	init()
})

function init() {
	initSideNav()
	initSlider()
	initParallax()
	initEvents()
	initMenuCircle()
}

function initMenuCircle() {
	var el = '.js-menu';
  	var myMenu = cssCircleMenu(el);

  	var el1 = '.js-menu-1';
  	var myMenu = cssCircleMenu(el1)

  	var el2 = '.js-menu-2';
  	var myMenu = cssCircleMenu(el2)

  	var el3 = '.js-menu-3';
  	var myMenu = cssCircleMenu(el3)

  	var el4 = '.js-menu-4';
  	var myMenu = cssCircleMenu(el4)
}

function initEvents() {
	// $('#idsomos').click(function() {
	// 	alert("funciona")
	// })

	$(window).scroll(function() {
		alignMenuNav()
	})

	configInitEventMenuOption()
}

function configInitEventMenuOption () {
	$('#option-1').click(function() {
		opacidadMenuOne()
	})

	$('#option-2').click(function () {
		opacidadMenuTwo()
	})

	$('#option-3').click(function() {
		menuOpacidadThree()
	})

	$('#option-4').click(function() {
		menuOpacidadFour()
	})

	$('#option-5').click(function() {
		menuOpacidadFive()
	})
}

function opacidadMenuOne() {
	if (!$('#content-option-2').hasClass('opacity')) {
		$('#content-option-2').addClass('opacity')
		$('#content-option-3').addClass('opacity')
		$('#content-option-4').addClass('opacity')
		$('#content-option-5').addClass('opacity')

	} else {
		$('#content-option-2').removeClass('opacity')
		$('#content-option-3').removeClass('opacity')
		$('#content-option-4').removeClass('opacity')
		$('#content-option-5').removeClass('opacity')
	}
}


function opacidadMenuTwo(){
	if (!$('#content-option-1').hasClass('opacity')) {

		$('#content-option-1').addClass('opacity')
		$('#content-option-3').addClass('opacity')
		$('#content-option-4').addClass('opacity')
		$('#content-option-5').addClass('opacity')

	} else {

		$('#content-option-1').removeClass('opacity')
		$('#content-option-3').removeClass('opacity')
		$('#content-option-4').removeClass('opacity')
		$('#content-option-5').removeClass('opacity')
	}
}

function menuOpacidadThree() {
	if (!$('#content-option-1').hasClass('opacity')) {
		$('#content-option-1').addClass('opacity')
		$('#content-option-2').addClass('opacity')
		$('#content-option-4').addClass('opacity')
		$('#content-option-5').addClass('opacity')
	} else {
		$('#content-option-1').removeClass('opacity')
		$('#content-option-2').removeClass('opacity')
		$('#content-option-4').removeClass('opacity')
		$('#content-option-5').removeClass('opacity')
	}
}


function menuOpacidadFour() {
	if (!$('#content-option-1').hasClass('opacity')) {
		$('#content-option-1').addClass('opacity')
		$('#content-option-3').addClass('opacity')
		$('#content-option-2').addClass('opacity')
		$('#content-option-5').addClass('opacity')
	} else {
		$('#content-option-1').removeClass('opacity')
		$('#content-option-3').removeClass('opacity')
		$('#content-option-2').removeClass('opacity')
		$('#content-option-5').removeClass('opacity')
	}
}

function menuOpacidadFive() {
	if (!$('#content-option-1').hasClass('opacity')) {
		$('#content-option-1').addClass('opacity')
		$('#content-option-3').addClass('opacity')
		$('#content-option-4').addClass('opacity')
		$('#content-option-2').addClass('opacity')
	} else {
		$('#content-option-1').removeClass('opacity')
		$('#content-option-3').removeClass('opacity')
		$('#content-option-4').removeClass('opacity')
		$('#content-option-2').removeClass('opacity')
	}
}

function alignMenuNav() {
	if ($(this).scrollTop() > 10) {
		$('#content-header').addClass('hide')
		$('#content-nav').addClass('shadow-nav')
	} else {
		$('#content-header').removeClass('hide')
		$('#content-nav').removeClass('shadow-nav')
	}
}

function initSideNav() {
	$(".button-collapse").sideNav();
}

function initSlider() {
	$('.slider').slider({full_width: true, indicators: false});
}

function initParallax() {
	$('.parallax').parallax();
}