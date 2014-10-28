$(document).ready(function() {
	var numCorrect = 0;
	var current = 0;
	//question array
	var questions = [
		{question: "Question 1 of 6:<br>What are the primary colors?",
		choices: ["Primary colors are the colors that are most popular with most of the people \
		in the world.", "Primary colors are colors with names that begin with A, B, or C.",
		"Primary colors are the brightest shades of all the colors.", "Primary colors are colors \
		that can't be created by mixing other colors."],
		qNum : 1,
		correct: 3
		},
		{question: "Question 2 of 6:<br>When looking through a prism, or at a rainbow, what is the order \
		colors will always fall in, from top to bottom?",
		choices: ["Pink, purple, fuschia, aubergene, yellow, blue and brown", "Red, orange, \
		yellow, green, blue, indigo, violet", "Orange, yellow, red, blue, green, indigo, \
		violet", "Green, yellow, orange, red, blue, violet, black and white"],
		qNum: 2,
		correct: 1
		},
		{question: "Question 3 of 6:<br>How does your eye distinguish color?",
		choices: ["Light sensitive cells in your retina distinquish colors for you.", "Your \
		pupil has sensitive cells that distinguish color.", "The cornea absorbs all light \
		and turns it into a specific color.", "The iris reflects and absorbs light, distinquishing \
		colors for you."],
		qNum: 3,
		correct: 0
		},
		{question: "Question 4 of 6:<br>What are complementary colors?",
		choices: ["Colors that are beside each other on the color wheel are called complementary.", "Colors \
		that appear opposite each other on the color wheel are complementary to each other.", "Colors \
		you like to wear together, that people say you look good in, are complementary \
		colors.", "Complementary colors is another word used to describe secondary colors."],
		qNum: 4,
		correct: 1
		},
		{question: "Question 5 of 6:<br>What are pigments?",
		choices: ["Pigments are different hues of blue.", "Pigments are chemicals or organic products \
		that give color to paint.", "Pigments is the name of a famous painting group from the \
		Netherlands", "Pigments are the colors created when you mix intermediate colors"],
		qNum: 5,
		correct: 1
		},
		{question: "Question 6 of 6:<br>What is another word for intermediate colors (for example, yellow green \
		or blue-violet?)",
		choices: ["Territorial colors", "Tetris colors", "In-between colors", "tertiary colors"],
		qNum: 6,
		correct: 3
	}]
	//click features
	$('#next').click(function() {
		changeGraph();
		current++;
		nextQuestion();
	});
	$('#redo').click(function() {
		numCorrect = 0;
		current = 0;
		$('#chart0').show();
		$('#next').show();
		$('#overlay').hide();
		$('#chart6').hide();
		$('#chart5').hide();
		$('#chart4').hide();
		$('#chart3').hide();
		$('#chart2').hide();
		$('#chart1').hide();
		$('#redo').hide();
		newQuestion();
		setScore("0 of 6 correct!");
	});
	//functions
	function setScore(score) {
		$("#scoreCount").text(score);	
	}
	
	function changeGraph() {
		var answer = $("input[type='radio']:checked").val();
		if (answer == questions[current].correct) {
			numCorrect++;
		}
		if (numCorrect == 1) {
			$('#chart0').hide();
			$('#chart1').fadeIn();
			setScore("1 of 6 correct!");
		} else if (numCorrect == 2) {
			$('#chart1').hide();
			$('#chart2').fadeIn();
			setScore("2 of 6 correct!");
		} else if (numCorrect == 3) {
			$('#chart2').hide();
			$('#chart3').fadeIn();
			setScore("3 of 6 correct!");
		} else if (numCorrect == 4) {
			$('#chart3').hide();
			$('#chart4').fadeIn();
			setScore("4 of 6 correct!");
		} else if (numCorrect == 5) {
			$('#chart4').hide();
			$('#chart5').fadeIn();
			setScore("5 of 6 correct!");
		} else if (numCorrect == 6) {
			$('#chart5').hide();
			$('#chart6').fadeIn();
			setScore("6 of 6 correct!");
		} else {
			$('#chart0').show();
		}
	}
	function nextQuestion () {
		if (current == 6) {
			$('#next').hide();
			$('#redo').show();
			showScore();
		} else {
			newQuestion();
		}
	}
	function newQuestion () {
		$('input[type=radio]').prop('checked', false);
		$('.question').html(questions[current].question);
		$('#answer0').html(questions[current].choices[0]);
		$('#answer1').html(questions[current].choices[1]);
		$('#answer2').html(questions[current].choices[2]);
		$('#answer3').html(questions[current].choices[3]);	
	}
	function showScore () {
		$('#overlay').fadeIn(1000);
		if (numCorrect == 0) {
			$('#finalScore').text("You need to get to know your colors!  You \
			answered " + numCorrect + " questions correctly!");
		} else if (numCorrect == 1) {
			$('#finalScore').text("You need to get to know your colors!  You \
			answered " + numCorrect + " question correctly!");
		} else {
			$('#finalScore').text("You know something about your colors! You \
			answered " + numCorrect + " questions correctly!");
		}
	}
});