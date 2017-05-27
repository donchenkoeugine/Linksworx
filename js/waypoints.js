var about_us1 = document.querySelector('.about_us_1'),
	about_title = document.querySelector('.about_title'),
	about_txt = document.getElementsByClassName('about_txt'),
	about_seaContainer = document.querySelector('.sea_container'),
	about_stacker = document.querySelector('.stacker'),
	above = document.getElementById('waypoint_2'),
	waypoint1 = new Waypoint({element: document.getElementById('waypoint_1'), handler: function(){}}),
	about_waypoint1 = new Waypoint({element: document.getElementById('waypoint_1'), handler: function(){}}),
	about_waypoint2 = new Waypoint({element: about_title, handler: function(){}}),
	waypoint2 = new Waypoint({element: above, handler: function(){}}),
	waypoint2_2 = new Waypoint({element: above, handler: function(){}}),
	aboutBg = document.querySelector('.bg_about'),
	aboveBg = document.querySelector('.bg_above'),
	chooseBg = document.querySelector('.bg_choose');

window.addEventListener('DOMContentLoaded', function() {
	about_us1.style.height = about_us1.offsetHeight + 'px';
});
window.addEventListener('resize', function() {
	waypoint2.options.offset = aboutBg.offsetHeight;
	about_us1.style.height = 'auto';
});

waypoint1.callback = function() {
	aboutBg.classList.toggle('fixbg');
}
waypoint2.options.offset = aboutBg.offsetHeight;
waypoint2.callback = function() {
	aboutBg.classList.toggle('fixbg');
	aboutBg.classList.toggle('fixdown')
}
about_waypoint1.options.offset = window.innerHeight / 2;
about_waypoint1.callback = function() {
	about_title.classList.add('flipInX');
	about_txt[0].classList.add('fadeInLeft');
	about_seaContainer.classList.add('moveDownContainer');
}
about_waypoint2.callback = function() {
	about_txt[1].classList.add('bounceInRight');
	about_stacker.classList.add('moveStacker');
}



waypoint2_2.options.offset = -above.offsetHeight;
waypoint2_2.callback = function(direction) {
	if (direction == 'down') {
		aboveBg.style.zIndex = '-2';
		chooseBg.style.zIndex = '-1';
	} else {
		aboveBg.style.zIndex = '-1';
		chooseBg.style.zIndex = '-2';		
	}
}