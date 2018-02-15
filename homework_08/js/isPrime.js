function isPrime(argument) {
	
	// check whether the entered number is greater than 1 and integer
	if ( (argument > 1) & (argument % 1 === 0) ) {
		
		// prime number, if there is a remainder on division by any number from 2 to argument-1
		for (let i = 2; i <= ( argument - 1 ); i++) {			
			if (argument % i !== 0) {
				continue;
			} return false;						
		} return true;
	} else {
		return false;
	}		
}
