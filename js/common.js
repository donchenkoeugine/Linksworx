//----------- Begin "Preload page"  ---------------------
var myPage = document.getElementById('my-page');



function hidePage() {
	document.querySelector('.company_name h1').style.animationPlayState = "paused";
	document.querySelector('.company_name h5').style.animationPlayState = "paused";
	document.body.style.overflow = "hidden";
}

function showPage() {
	var loader = document.querySelector('.loaderArea');
	loader.style.display = "none";
	document.body.style.overflow = "auto";
	myPage.style.opacity = '1';
	document.querySelector('.company_name h1').style.animationPlayState = "running"
	document.querySelector('.company_name h5').style.animationPlayState = "running"
}
window.addEventListener("DOMContentLoaded", hidePage);
// setTimeout(showPage, 3000);
window.addEventListener("load", showPage);
//------------- End "Preload page" ---------------------


//------------- Begin "Mmenu-jquery" -------------------
$(function() {
	$('#my-menu').mmenu({
		"extensions": [
			"theme-black",
			"fx-listitems-slide",
			"shadow-page",
			"border-full"
		],
		"offCanvas": {
			"position": "right"
		}
	});
	
	var api = $('#my-menu').data('mmenu');

	api.bind('open:finish', function() {
		$('.hamburger').addClass('is-active');
	})
	api.bind('close:finish', function() {
		$('.hamburger').removeClass('is-active');
	})

});
//=============== End "Mmenu-jquery" ====================

var header = document.getElementsByTagName('header')[0];

header.style.height = screen.availHeight + 'px';