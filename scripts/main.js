require(["jquery", "insults", "swords", "motion"], function($, insults, swords, motion) {
    $(function() {
			insults.show();
			window.setInterval(insults.show, 3000);

			window.setInterval(swords.animate, 200);

			motion.animate();
    });
});
