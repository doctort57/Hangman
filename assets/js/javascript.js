// Global Variables
var display_word = "";
var used_letters = "";
var wrong_guesses = 0;
var games_won = 0
var games_lost = 0;
var games_total = 0;

// object Array for selected words and Winning message, image, sounds
var winnerObject = {
    words: ["BLUTO","FLOUNDER","DEANWORMER","DDAY"],
    images: ["TOGA.jpg","Flounder.jpg","doubleSecret.jpg","rammingSpeed.jpg"],
    winMsg: ["TOGA TOGA TOGA TOGA","Oh Man is this Great","Double Secret Probation",
						"Ramming Speed!!!"],
    winSound: ["toga.wav","is_this_great.wav","double_secret.wav","ramming.wav"]
 }

// object Array for Losing message, image, sounds
var loserObject = {
	imageWrg: ["bluto.jpg","Smartguy.jpg","LyingAround.jpg","Pledgepin.jpg"],
    wrgMsg: ["My Advice to You is to Start Drinking Heavily","You'll get your chance Smart Guy",
    		 "What's all this Lying Around Stuff?", "For God's sake! What kind of man hits a defenseless animal??"],
    loserSound: ["advice.wav","chance.wav","lyin_around.wav","defenseless.wav"]
};

/* Main function for eacch clicked letter */

function selectLetter(l)
{
	if (used_letters.indexOf(l) != -1)
	{
		return;
	}

	used_letters += l;
	games_total += 1;
	remain_guesses = remain_guesses -1;
	document.game.usedLetters.value = used_letters;
	document.game.remainLetters.value = remain_guesses;
 
if (to_guess.indexOf(l) != -1)
{
 // correct letter guess
		pos = 0;
		temp_mask = display_word;
		 
		while (to_guess.indexOf(l, pos) != -1)
		{
		pos = to_guess.indexOf(l, pos);			
		end = pos + 1;
		 
		start_text = temp_mask.substring(0, pos);
		end_text = temp_mask.substring(end, temp_mask.length);
		 
		temp_mask = start_text + l + end_text;
		pos = end;
}
		 
		display_word = temp_mask;
		document.game.displayWord.value = display_word;

 // WINNER WINNER CHICKEN DINNER

if (display_word.indexOf("#") == -1)
	{
		games_won +=1;
		document.game.gamesWon.value = games_won;
// set random image message and sound on Winning Game		
		document.bluto.src="assets/images/" + winnerObject.images[random_number]; 
		var audio = new Audio("assets/sounds/" + winnerObject.winSound[random_number]);
		audio.play(); 
		alert("WINNER " + winnerObject.winMsg[random_number]);
		this.reset();
	}
}
else
	{
// LOSING TIME 
		document.game.remainLetters.value = remain_guesses;
		if (remain_guesses == 0)
			{
				games_lost +=1;
// set random image message and sound on Loss 
				random_number = Math.floor(Math.random() * (loserObject.imageWrg.length));
				document.bluto.src="assets/images/" + loserObject.imageWrg[random_number];
				var audio = new Audio("assets/sounds/" + loserObject.loserSound[random_number]);
				audio.play(); 
   				alert("LOSER " + loserObject.wrgMsg[random_number]);
				this.reset();
			}
	}
}


/* Reset game after each win or loss */

function reset(){
		this.selectWord();
		document.game.usedLetters.value = "";
		used_letters = "";
		wrong_guesses = 0;
		remain_guesses = 10;
		document.game.remainLetters.value = remain_guesses;
		document.game.gamesWon.value = games_won;
		document.game.gamesLost.value = games_lost;
		if (games_total == 0) {
			document.bluto.src="assets/images/AnimalHouse.jpg"; 
		} 
}

/* Generate new random word */

function selectWord()
{
	random_number = Math.floor(Math.random() * winnerObject.words.length);
	to_guess = winnerObject.words[random_number];
// display masked word
	masked_word = this.createMask(to_guess);
	document.game.displayWord.value = masked_word;
	display_word = masked_word;
}
 
 /* Create Mask for new word */

function createMask(m)
{
	mask = "";
	word_length = m.length;
 
for (i = 0; i < word_length; i ++)
{
	mask += "#";
}
	return mask;
}
