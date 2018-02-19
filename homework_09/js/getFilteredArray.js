function getFilteredArray(array, myFunc) {
	var filteredArray = [];	
	forEach(array, function(el) {
		if (myFunc(el)) {
			filteredArray.push(el);
		}	
	});
	return filteredArray;
}