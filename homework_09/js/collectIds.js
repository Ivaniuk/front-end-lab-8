function collectIds(array) {
	
	// new array of objects that have a "rating" property higher than 3
	var newArray = getFilteredArray(array, function(el) {
		return el.rating > 3;
	});
	
	// returns a new array of ids of videos that have a rating higher than 3
	return getTransformedArray(newArray, function(el) {
		return el.id;
	});
}