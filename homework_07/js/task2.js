var startGame = confirm('Do you want to play a game?'),
	min = 0,
	max = 5,
	attempts = 3,
	totalPrize = 0,
	maxPrize = 10;
	posPrize = 10;

if (startGame === false) {
	console.log('You did not become a millionaire');
} else {

	// main loop and label on it
	top:
	while (startGame) {	
		
		// random integer for a given range
		var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
		console.log(randomNumber);
			
		for (var i = 0; i < 3; i++) {

			var userNumber = prompt('Enter a number from ' + min + ' to ' + max + '\n' + 'Attempts left: ' + attempts + '\n' + 
				'Total prize: ' + totalPrize + '$\n' + 'Possible prize on current attempt: ' + posPrize + '$');
			
			// check whether the value entered by the user can be converted into a number
			if ( !isNaN(userNumber) ) {			
				userNumber = parseInt(userNumber);
			}		

			// if the user guessed the number
			if ( userNumber === randomNumber ) {						
				totalPrize = totalPrize + posPrize;			 
				var nextGame = confirm('Do you want to continue the game?');			
				if (nextGame) {
					max = max * 2;				
					maxPrize = maxPrize * 3;
					posPrize = maxPrize;				
					attempts = 3;
					continue top;				 
				} else break;						 

			// if the user did not guess the number		
			} else {
				posPrize = parseInt( posPrize / 2 );
				attempts = attempts - 1;
				
				// when the user did not guess the number 3 times the prize is reset
				if ( attempts === 0 ) {
					totalPrize = 0;
				}
			} 		
		}
		//user did not guess the number 3 times or refused to continue after win
		console.log('Thank you for a game. Your prize is: ' + totalPrize + '$');
		var playAgain = confirm('Do you want to play again?');
		if (playAgain) {		
			attempts = 3;
			posPrize = 10;
			max = 5;
			totalPrize = 0;
			 continue;
		} else break;		
	}
}




