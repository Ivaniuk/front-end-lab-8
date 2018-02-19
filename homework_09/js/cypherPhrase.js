function cypherPhrase(objectArg, stringArg) {
	
	// returns arrey transformed by objectArg rules		
	var newArr = getTransformedArray(stringArg.split(''), function(el) {
		for(var prop in objectArg) {
			if (el === prop) {
				el = objectArg[prop];
			}
		}
		return el;
	});
		
	return newArr.join('');		
}