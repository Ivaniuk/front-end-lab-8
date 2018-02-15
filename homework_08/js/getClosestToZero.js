function getClosestToZero() {
	let closestToZero = 10000;

	// search for the lowest absolute value	
	for (let n = 0; n < arguments.length; n++) {
		while  ( Math.abs(arguments[n]) < Math.abs(closestToZero) ) {
			 closestToZero = arguments[n];
		} 
	}		
	return closestToZero;
}
