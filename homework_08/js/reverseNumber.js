function reverseNumber(argument) {
	if ( argument < 0 ) {
		argument = Math.abs(argument);
		var negativeNumber = true;			
	} else negativeNumber = false;

	// convert an argument to a string type
	var argStr = argument.toString();

	// convert a string into an array
	var arr = argStr.split('');

	// change the order of elements in the array to the reverse
	var arrReverse = arr.reverse();	

	// add a minus sign if the argument is negative
	if (negativeNumber) {
		var minus = ['-'];
		var fullReverseArr = minus.concat(arrReverse);		
	} else {
		fullReverseArr = arrReverse;
	}
	// convert the array into a string and bring it to the integer
	var reverseNumber = Number(fullReverseArr.join(''));
	
	return reverseNumber;
}



