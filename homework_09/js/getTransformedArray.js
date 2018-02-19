function getTransformedArray(array, myFunc) {
	var transformedArray = [];	
	forEach(array, function(el) {
		transformedArray.push( myFunc(el) );	
	});
	return transformedArray;
}