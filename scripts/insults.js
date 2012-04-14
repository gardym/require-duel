define(["jquery"], function($) {

	var insults = [
		"You fight like a dairy farmer.",
		"Soon you'll be wearing my sword like a shish-kabob!",		
		"You're no match for my brains, you poor fool.",
		"This is the end for you, you gutter-crawling cur!",
		"There are no words for how disgusting you are.",
		"I'm not going to take your insolence sitting down!",
		"People fall at my feet when they see me coming.",
		"I've heard you are a contemptible sneak.",
		"My handkerchief will wipe up your blood!",
		"You are a pain in the backside, sir!",
		"There are no clever moves that can help you now.",
		"My name is feared in every dirty corner of this island!"
	];

	var retorts = [
		"How appropriate. You fight like a cow.",
		"First you'd better stop waving it around like a feather-duster.",
		"I'd be in real trouble if you ever used them.",
		"And I've got a TIP for you. Get the POINT?",
		"Yes there are. You just never learned them.",
		"Your hemorrhoids are flaring up again, eh?",
		"Even BEFORE they smell your breath?",
		"Too bad no one's ever heard of YOU at all.",
		"So you got that job as janitor, after all.",
		"Your hemorrhoids are flaring up again, eh?",
		"Yes there are. You just never learned them.",
		"So you got that job as janitor, after all."
	];

	var new_insult = true;
	var insult_index = 0;
	var spaces = new Array(12).join(" ");

	var showInsult = function() {

		if(new_insult) {
			insult_index = Math.floor(Math.random() * insults.length);
		}

		text = new_insult ? insults[insult_index] : retorts[insult_index];
		text = text + "\n\n" + spaces + (new_insult ? " /" : "") + spaces + (!new_insult ? "\\" : "");
		$("#insult").text(text);

		new_insult = !new_insult;
	};

	return { 
		show: showInsult
	};

});
