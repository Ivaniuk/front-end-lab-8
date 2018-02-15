function isBigger(argument1, argument2) {
	while (argument1 > argument2) {
		return true;
	} return false;
}

function isSmaller(argument1, argument2) {
	while ( (isBigger(argument1, argument2) ) || (argument1 === argument2) ) {
		return false;
	} return true;
}
