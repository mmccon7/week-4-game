// List all variables and arrays for data
var crystalOptions = ["1", "2", "3", "4", "5", "6", "7" , "8", "9", "10", "11", "12"];
var numOptions = ["19" , "20", "21", "22", "23", "24","25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36","37", "38", "39", "40", "41", "42",
"43", "44", "45", "46", "47", "48","49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60","61", "62", "63", "64", "65", "66",
"67", "68", "69", "70", "71", "72","73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84","85", "86", "87", "88", "89", "90",
"91", "92", "93", "94", "95", "96","97", "98", "99", "100", "101", "102", "103", "104", "105", "106", "107", "108","109", "110", "111", "112", "113", "114",
"115" , "116", "117", "118", "119", "120"]

//Global variables
var magicNumber = numOptions[Math.floor(Math.random() * numOptions.length)];
var crystalOne = crystalOptions[Math.floor(Math.random() * crystalOptions.length)];
var crystalTwo = crystalOptions[Math.floor(Math.random() * crystalOptions.length)];
var crystalThree = crystalOptions[Math.floor(Math.random() * crystalOptions.length)];
var crystalFour = crystalOptions[Math.floor(Math.random() * crystalOptions.length)];

//Game counters
var winCount = 0;
var lossCount = 0;
var crystalCounter = 0;

$("#magicNumber").html(magicNumber);
$("#winCount").html(winCount);
$("#lossCount").html(lossCount);
$("#crystalValue").html(crystalCounter);


//Functions
//Create function to initialize the game/restart
function startGame(){
	
	magicNumber = numOptions[Math.floor(Math.random() * numOptions.length)];
	crystalOne = crystalOptions[Math.floor(Math.random() * crystalOptions.length)];
	crystalTwo = crystalOptions[Math.floor(Math.random() * crystalOptions.length)];
	crystalThree = crystalOptions[Math.floor(Math.random() * crystalOptions.length)];
	crystalFour = crystalOptions[Math.floor(Math.random() * crystalOptions.length)];
	crystalCounter = 0;
	$("#magicNumber").html(magicNumber);
	$("#crystalValue").html(crystalCounter);
}

//Create function to win game
function win(){

	alert("GREAT JOB! YOU WIN!");
	winCount++;
	$("#winCount").html(winCount);
	startGame();
}

function lost(){

	alert("YOU LOST! TRY AGAIN");
	lossCount++;
	$("#lossCount").html(lossCount);
	startGame();
}
	

$("#crystalOne").on("click", function(){
	$(".circle").html(crystalOne);
	crystalCounter = crystalCounter + parseInt(crystalOne);
	$("#crystalValue").html(crystalCounter);

	if (crystalCounter == magicNumber){
		win();
	}

	else if (crystalCounter > magicNumber){
		lost();
	}
});

$("#crystalTwo").on("click", function(){
	crystalCounter = crystalCounter + parseInt(crystalTwo);
	$("#crystalValue").html(crystalCounter);

	if (crystalCounter == magicNumber){
		win();
	}

	else if (crystalCounter > magicNumber){
		lost();
	}
});

$("#crystalThree").on("click", function(){
	crystalCounter = crystalCounter + parseInt(crystalThree);
	$("#crystalValue").html(crystalCounter);

	if (crystalCounter == magicNumber){
		win();
	}

	else if (crystalCounter > magicNumber){
		lost();
	}
});

$("#crystalFour").on("click", function(){
	crystalCounter = crystalCounter + parseInt(crystalFour);
	$("#crystalValue").html(crystalCounter);

	if (crystalCounter == magicNumber){
		win();
	}

	else if (crystalCounter > magicNumber){
		lost();
	}
});