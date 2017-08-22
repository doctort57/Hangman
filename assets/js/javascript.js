// Global Variables
var display_word = "";
var used_letters = "";
var wrong_guesses = 0;
var games_won = 0
var games_lost = 0;
var games_total = 0;

// object Array for selected words and Winning message, image, sounds
var winnerObject = {
    words: ["BRUCE","ROY","CLARENCE","NILS","MAX","STEVIE"],
    images: ["BRUCE2.jpg","Roy2.jpg","Clarence.jpg","NILS3.jpeg","max.jpg","Stevie.jpg"],
    winMsg: ["Lucky Break, try again","Cheater","Wise Guy","I dont like playing with You",
						"Okay you are pretty good at this arent You"],
    winSound: ["needed_that.wav","foot_down.wav","is_this_great.wav","lyin_around.wav","pledges.wav",
						   "toga.wav","down_the_drain.wav"]
 }

// object Array for Losing message, image, sounds
var LoserObject = {
	imageWrg: ["HeyWhats.jpg","Wormer.jpg","Pledgepin.jpg","Bluto.jpg","DDay.jpg","TOGA.jpg"],
    wrgMsg: ["Bluto","Wormer DEAD MAN","Hey Needermyer","Drink Heavily","DDAY","TOGA!! TOGA!! TOGA!!"],
    playSound: ["needed_that.wav","foot_down.wav","is_this_great.wav","lyin_around.wav","pledges.wav",
						   "toga.wav","down_the_drain.wav"]
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
		document.bruce.src="assets/images/" + winnerObject.images[random_number]; 
		random_number = Math.round(Math.random() * (winnerObject.winMsg.length - 1));
	/*	var audio = new Audio("assets/sounds/" + winnerObject.playSound[random_number]);
		audio.play(); */
		alert(winnerObject.winMsg[random_number]);
		reset();
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
				random_number = Math.round(Math.random() * (loserObject.imageWrg.length - 1));
				document.bruce.src="assets/images/" + loserObject.imageWrg[random_number];
				var audio = new Audio("assets/sounds/" + loserObject.playSound[random_number]);
				audio.play(); 
   				alert("Loser" + loserObject.wrgMsg[random_number]);
				reset();
			}
	}
}


/* Reset game after each win or loss */

function reset(){
		selectWord();
		document.game.usedLetters.value = "";
		used_letters = "";
		wrong_guesses = 0;
		remain_guesses = 10;
		document.game.remainLetters.value = remain_guesses;
		document.game.gamesWon.value = games_won;
		document.game.gamesLost.value = games_lost;
		if (games_total == 0) {
			document.bruce.src="assets/images/PEOPLE.jpg"; 
		} 
}

/* Generate new random word */

function selectWord()
{
	random_number = Math.round(Math.random() * winnerObject.words.length - 1);
	to_guess = winnerObject.words[random_number];
// display masked word
	masked_word = createMask(to_guess);
	document.game.displayWord.value = masked_word;
	display_word = masked_word;
}
 
 /* Create Mask for new word */

function createMask(m)
{
	mask = "";
	word_lenght = m.length;
 
for (i = 0; i < word_lenght; i ++)
{
	mask += "#";
}
	return mask;
}
