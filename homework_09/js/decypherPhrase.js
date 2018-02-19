function decypherPhrase(objectArg, stringArg) {
	var reverseObject = {};
	
	// reverse prop-value in objectArg
	for (var prop in objectArg) {
		reverseObject[objectArg[prop]] = prop;		
	}
		
	return cypherPhrase(reverseObject, stringArg);
}