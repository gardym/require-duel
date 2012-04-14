define(["jquery"], function($) {

	var pace = 800;
	var distance = "120px";
	var easing = "swing";

	var moveRight = function() {
		$("#frame_container").animate({left: distance}, pace, easing, moveLeft);
	};

	var moveLeft = function() {
		$("#frame_container").animate({left: 0}, pace, easing, moveRight);
	};

	return {
		animate: moveRight
	};

});
