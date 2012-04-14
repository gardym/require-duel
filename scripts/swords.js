define(["jquery"], function($) {

	$(".frame").hide();

	var frame = 1;
	var animateSwords = function() {
		$(".frame").hide();
		$("." + (frame + 1)).show();
		frame = (frame + 1) % 2;
	};

	return {
		animate: animateSwords
	};

});
