var about_us1 = document.getElementsByClassName('about_us_1')[0],
	about_title = document.getElementsByClassName('about_title')[0],
	about_txt = document.getElementsByClassName('about_txt'),
	about_seaContainer = document.getElementsByClassName('sea_container')[0],
	about_stacker = document.getElementsByClassName('stacker')[0],
	waypoint1 = new Waypoint({element: document.getElementById('waypoint_1'), handler: function(){}}),
	waypoint2 = new Waypoint({element: document.getElementById('waypoint_2'), handler: function(){}}),
	about_waypoint1 = new Waypoint({element: document.getElementById('waypoint_1'), handler: function(){}}),
	about_waypoint2 = new Waypoint({element: about_txt[0], handler: function(){}}),
	aboutBg = document.getElementsByClassName('bg_about')[0];

waypoint1.callback = function(direction) {
	aboutBg.classList.toggle('fixbg');
}

function setOffsetWaypoint2() {
	waypoint2.options.offset = window.innerHeight;
}
window.addEventListener('DOMContentLoaded',setOffsetWaypoint2);
window.addEventListener('resize', setOffsetWaypoint2);
waypoint2.callback = function(direction) {
	aboutBg.classList.toggle('fixbg');
	aboutBg.classList.toggle('fixdown');
}
about_us1.style.height = about_us1.offsetHeight + 'px';
about_waypoint1.options.offset = 200;
about_waypoint1.callback = function() {
	about_title.classList.add('flipInX');
	about_txt[0].classList.add('zoomInLeft');
	about_seaContainer.classList.add('moveDownContainer');
}
about_waypoint2.callback = function() {
	// about_txt[1].classList.add('zoomInLeft');
	about_txt[1].classList.add('bounceInRight');
	about_stacker.classList.add('moveStacker');
}

