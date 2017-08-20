
var can_play = true;
var words = new Array("BRUCE","ROY","CLARENCE","NILS","MAX","CHARLIE","STEVIE");
 
var to_guess = "";
var display_word = "";
var used_letters = "";
var wrong_guesses = 0;
var remain_guesses = 10;
var games_won = 0;
var games_lost = 0;
 

function selectLetter(l)
{
if (can_play == false)
{
return;
}
 
if (used_letters.indexOf(l) != -1)
{
return;
}

used_letters += l;
document.game.usedLetters.value = used_letters;
remain_guesses = remain_guesses -1;
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
 
if (display_word.indexOf("#") == -1)
	{
		// won
		/* alert("Well done, you have won!"); */
		can_play = false;
		games_won +=1;
		document.game.gamesWon.value = games_won;
		reset();
		setImage();
	}
}
else
	{
		// incortect letter guess
		wrong_guesses += 1;
		document.game.remainLetters.value = remain_guesses;

 
		if (remain_guesses == 0)
			{
				// lost
				alert("Sorry, you have lost!");
				games_lost +=1;
				
				reset();
				wrgImage();
			//	can_play = false;
			}
	}
}

function reset(){
		selectWord();
		document.game.usedLetters.value = "";
		used_letters = "";
		wrong_guesses = 0;
		remain_guesses = 10;
		document.game.remainLetters.value = remain_guesses;
		document.game.gamesWon.value = games_won;
		document.game.gamesLost.value = games_lost;
		document.bruce.src="assets/images/PEOPLE.jpg";
}
 
function selectWord()
{
can_play = true;
random_number = Math.round(Math.random() * (words.length - 1));
to_guess = words[random_number];
//document.game.theWord.value = to_guess;
 
// display masked word
masked_word = createMask(to_guess);
document.game.displayWord.value = masked_word;
display_word = masked_word;
}
 
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

function setImage() {
	switch (temp_mask) {
		case  "MAX":
			alert("Lucky Break, try again");
			document.bruce.src="assets/images/max.jpg";
			break;
	 	case  "NILS":
	 		alert("Cheater");
	 		document.bruce.src="assets/images/NILS3.jpeg";
	 		break;
	 	case  "CLARENCE":
	 		alert("Wise Guy");
			document.bruce.src="assets/images/Clarence.jpg";
			break;
	 	case "ROY":
	 		alert("I dont like playing with You");
	 		document.bruce.src="assets/images/Roy.jpg";
	 		break;
	 	case "STEVIE":
	 		alert("Okay you are pretty good at this arent You?");
			document.bruce.src="assets/images/Stevie.jpg";
			break;
	 	case "BRUCE":
	 		document.bruce.src="assets/images/BRUCE2.jpg";
	 		break;
	 	case 7:
			document.bruce.src="assets/images/Bruce.jpeg";
			break;
	 	case 8:
	 		document.bruce.src="assets/images/Bruce.jpeg";
	 		break;
	 	}
}

function wrgImage() {
	switch (wrong_guesses) {
		case  1:
			alert("Lucky Break, try again");
			document.bruce.src="assets/images/HeyWhats.jpg";
			break;
	 	case  2:
	 		alert("Cheater");
	 		document.bruce.src="assets/images/Wormer.jpg";
	 		break;
	 	case  3:
	 		alert("Wise Guy");
			document.bruce.src="assets/images/Pledgepin.jpg";
			break;
	 	case 4:
	 		alert("I dont like playing with You");
	 		document.bruce.src="assets/images/Bluto.jpg";
	 		break;
	 	case 5:
	 		alert("Okay you are pretty good at this arent You?");
			document.bruce.src="assets/images/DDay.jpg";
			break;
	 	case 6:
	 		document.bruce.src="assets/images/TOGA.jpeg";
	 		break;
	 	case 7:
			document.bruce.src="assets/images/Bruce.jpeg";
			break;
	 	case 8:
	 		document.bruce.src="assets/images/Bruce.jpeg";
	 		break;
	 	}
}