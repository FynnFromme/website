function scrollHandler() {
	scrollHandler_title_title();
	scrollHandler_description();
}

function scrollHandler_title_title() {
	var element = document.getElementById('title');

	var distanceToTop = window.pageYOffset + element.getBoundingClientRect().top;
	var windowHeight = window.innerHeight;
 	var elementHeight = element.offsetHeight;
	var scrollTop = document.documentElement.scrollTop;

	var opacity = 1;
	opacity = 1 - (scrollTop - distanceToTop + windowHeight/20) / elementHeight * 2;
	

	if (opacity >= 0) {
		element.style.opacity = opacity;
		element.style.visibility = 'visible';
	}
	else {
		element.style.opacity = 0;
		element.style.visibility = 'hidden';
	}
}

function scrollHandler_description() {
	var element = document.getElementById('description');

	var distanceToTop = window.pageYOffset + element.getBoundingClientRect().top;
 	var elementHeight = element.offsetHeight;
	var scrollTop = document.documentElement.scrollTop;

	var windowHeight = window.innerHeight;

	var opacity = 1;

	opacity = 1 - (scrollTop - distanceToTop + windowHeight/1.8) / elementHeight;
	

	if (opacity >= 0) {
		element.style.visibility = 'visible';
		element.style.opacity = opacity;
	}
	else {
		element.style.opacity = 0;
		element.style.visibility = 'hidden';
	}
}

window.addEventListener('scroll', scrollHandler);