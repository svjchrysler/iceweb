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
	
	$(window).scroll(function() {
		alignMenuNav()
	})

	configEventMenuNav()
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

function configEventMenuNav() {
	$('#btnSomos').click(function(e) {
		positionContentSomos(e)
	})

	$('#btnDataHub').click(function(e) {
		positionContentDataHub(e)
	})

	$('#btnEstadisticas').click(function(e) {
		positionContentEstadisticas(e)
	})

	$('#btnNoticias').click(function(e) {
		positionContentNoticias(e)
	})

	$('#btnBoletines').click(function(e) {
		positionContentBoletines(e)
	})

	$('#btnContacto').click(function(e) {
		positionContentContacto(e)
	})

	configEventNavMobile()

}

function configEventNavMobile() {
	$('#btnSomosM').click(function(e) {
		positionContentSomos(e)
	})

	$('#btnDataHubM').click(function(e) {
		positionContentDataHub(e)
	})

	$('#btnEstadisticasM').click(function(e) {
		positionContentEstadisticas(e)
	})

	$('#btnNoticiasM').click(function(e) {
		positionContentNoticias(e)
	})

	$('#btnBoletinesM').click(function(e) {
		positionContentBoletines(e)
	})

	$('#btnContactoM').click(function(e) {
		positionContentContacto(e)
	})
}

function positionContentSomos(e) {
	e.preventDefault()
	var posicion = $("#content-somos").offset().top;
	$("html, body").animate({
		scrollTop: posicion
	}, 	500);
}

function positionContentDataHub(e) {
	e.preventDefault()
	var posicion = $("#content-datahub").offset().top;
	$("html, body").animate({
		scrollTop: posicion
	}, 	500);
}

function positionContentEstadisticas(e) {
	e.preventDefault()
	var posicion = $("#content-estadisticas").offset().top;
	$("html, body").animate({
		scrollTop: posicion
	}, 	500);
}

function positionContentBoletines(e) {
	e.preventDefault()
	var posicion = $("#content-boletines").offset().top;
	$("html, body").animate({
		scrollTop: posicion
	}, 	500);
}

function positionContentNoticias(e) {
	e.preventDefault()
	var posicion = $("#content-noticias").offset().top;
	$("html, body").animate({
		scrollTop: posicion
	}, 	500);
}

function positionContentContacto(e) {
	e.preventDefault()
	var posicion = $("#content-contacto").offset().top;
	$("html, body").animate({
		scrollTop: posicion
	}, 	500);
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

	configPositionContenPage()
}

function configPositionContenPage() {
	var height = $(window).scrollTop()
	var activeOption = 'active-option'
	var inactiveOption = 'inactive-option'

	if ( height >= ($("#content-somos").offset().top - 100) ) {
		configActiveInactiveOptionSomos(activeOption, inactiveOption)
		configActiveInactiveOptionDataHub(inactiveOption, activeOption)
		configActiveInactiveOptionEstadistica(inactiveOption, activeOption)
		configActiveInactiveOptionNoticias(inactiveOption, activeOption)
		configActiveInactiveOptionBoletines(inactiveOption, activeOption)
		configActiveInactiveOptionContacto(inactiveOption, activeOption)
	}

	if (height >= ($('#content-datahub').offset().top - 100) ) {
		configActiveInactiveOptionSomos(inactiveOption, activeOption)
		configActiveInactiveOptionDataHub(activeOption, inactiveOption)
		configActiveInactiveOptionEstadistica(inactiveOption, activeOption)
		configActiveInactiveOptionNoticias(inactiveOption, activeOption)
		configActiveInactiveOptionBoletines(inactiveOption, activeOption)
		configActiveInactiveOptionContacto(inactiveOption, activeOption)
	}

	if (height >= ($('#content-estadisticas').offset().top - 100) ) {
		configActiveInactiveOptionSomos(inactiveOption, activeOption)
		configActiveInactiveOptionDataHub(inactiveOption, activeOption)
		configActiveInactiveOptionEstadistica(activeOption, inactiveOption)
		configActiveInactiveOptionNoticias(inactiveOption, activeOption)
		configActiveInactiveOptionBoletines(inactiveOption, activeOption)
		configActiveInactiveOptionContacto(inactiveOption, activeOption)
	}

	if (height >= ($('#content-boletines').offset().top - 100) ) {
		configActiveInactiveOptionSomos(inactiveOption, activeOption)
		configActiveInactiveOptionDataHub(inactiveOption, activeOption)
		configActiveInactiveOptionEstadistica(inactiveOption, activeOption)
		configActiveInactiveOptionNoticias(inactiveOption, activeOption)
		configActiveInactiveOptionBoletines(activeOption, inactiveOption)
		configActiveInactiveOptionContacto(inactiveOption, activeOption)
	}

	if (height >= ($('#content-noticias').offset().top - 100) ) {
		configActiveInactiveOptionSomos(inactiveOption, activeOption)
		configActiveInactiveOptionDataHub(inactiveOption, activeOption)
		configActiveInactiveOptionEstadistica(inactiveOption, activeOption)
		configActiveInactiveOptionNoticias(activeOption, inactiveOption)
		configActiveInactiveOptionBoletines(inactiveOption, activeOption)
		configActiveInactiveOptionContacto(inactiveOption, activeOption)	
	}

	if (height >= ($('#content-contacto').offset().top - 100) ) {
		configActiveInactiveOptionSomos(inactiveOption, activeOption)
		configActiveInactiveOptionDataHub(inactiveOption, activeOption)
		configActiveInactiveOptionEstadistica(inactiveOption, activeOption)
		configActiveInactiveOptionNoticias(inactiveOption, activeOption)
		configActiveInactiveOptionBoletines(inactiveOption, activeOption)
		configActiveInactiveOptionContacto(activeOption, inactiveOption)
	}
}

function configActiveInactiveOptionSomos(active, inactive) {
	configNavSomosD(active, inactive)
	configNavSomosM(active, inactive)
}

function configNavSomosD(active, inactive) {
	$('#btnSomos').removeClass(inactive)
	$('#btnSomos').addClass(active)
}

function configNavSomosM(active, inactive) {
	$('#btnSomosM').removeClass(inactive)
	$('#btnSomosM').addClass(active)
}

function configActiveInactiveOptionDataHub(active, inactive) {
	configNavDataHubD(active, inactive)
	configNavDataHubM(active, inactive)
}

function configNavDataHubD(active, inactive) {
	$('#btnDataHub').removeClass(inactive)
	$('#btnDataHub').addClass(active)
}

function configNavDataHubM(active, inactive) {
	$('#btnDataHubM').removeClass(inactive)
	$('#btnDataHubM').addClass(active)
}

function configActiveInactiveOptionEstadistica(active, inactive) {
	configNavEstadisticaD(active, inactive)
	configNavEstadisticaM(active, inactive)
}

function configNavEstadisticaD(active, inactive) {
	$('#btnEstadisticas').removeClass(inactive)
	$('#btnEstadisticas').addClass(active)
}

function configNavEstadisticaM(active, inactive) {
	$('#btnEstadisticasM').removeClass(inactive)
	$('#btnEstadisticasM').addClass(active)
}

function configActiveInactiveOptionNoticias(active, inactive) {
	configNavNoticiasD(active, inactive)
	configNavNoticiasM(active, inactive)
}

function configNavNoticiasD(active, inactive) {
	$('#btnNoticias').removeClass(inactive)
	$('#btnNoticias').addClass(active)
}

function configNavNoticiasM(active, inactive) {
	$('#btnNoticiasM').removeClass(inactive)
	$('#btnNoticiasM').addClass(active)
}


function configActiveInactiveOptionBoletines(active, inactive) {
	configNavBoletinesD(active, inactive)
	configNavBoletinesM(active, inactive)
}

function configNavBoletinesD(active, inactive) {
	$('#btnBoletines').removeClass(inactive)
	$('#btnBoletines').addClass(active)
}

function configNavBoletinesM(active, inactive) {
	$('#btnBoletinesM').removeClass(inactive)
	$('#btnBoletinesM').addClass(active)
}

function configActiveInactiveOptionContacto(active, inactive) {
	configNavContactoD(active, inactive)
	configNavContactoM(active, inactive)
}

function configNavContactoD(active, inactive) {
	$('#btnContacto').removeClass(inactive)
	$('#btnContacto').addClass(active)
}

function configNavContactoM(active, inactive) {
	$('#btnContactoM').removeClass(inactive)
	$('#btnContactoM').addClass(active)
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