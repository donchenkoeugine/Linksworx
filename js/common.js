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
	document.querySelector('.company_name h1').style.animationPlayState = "running";
	document.querySelector('.company_name h5').style.animationPlayState = "running";
}

document.querySelector('.company_name h1').addEventListener("animationend", function() {
	document.querySelector('.bg_above').style.visibility = 'visible';
});
document.querySelector('.company_name h1').addEventListener("animationend", function() {
	document.querySelector('.bg_choose').style.visibility = 'visible';
});
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

var header = document.querySelector('header'),
	about_us1 = document.querySelector('.about_us_1'),
	about_us2 = document.querySelector('.about_us_2');

header.style.height = Math.max(window.innerHeight, screen.availHeight) + 'px';
// about_us1.style.height = screen.availHeight + 'px';
// about_us2.style.height = screen.availHeight + 'px';

var wrapNav = document.querySelector('.wrapNav');

var makeCounter = function() {
	var count = 0,
		prevScrollY = window.pageYOffset;
	return function() {
		var currentScrollY = window.pageYOffset;
		if (currentScrollY < screen.availHeight) {
			wrapNav.classList.remove('fixedNav');
			return;
		}
		count++;
		if (count == 30) {
			count = 0;
			if (prevScrollY > currentScrollY) {
				wrapNav.classList.add('fixedNav');
			} else {
				wrapNav.classList.remove('fixedNav');
			};
		}
		prevScrollY = currentScrollY;
	}
};

var counter = makeCounter();


window.onscroll = counter;