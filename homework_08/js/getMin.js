function getMin() {	
	let min = 10000;
	for (let n = 0; n < arguments.length; n++) {
		while ( arguments[n] < min ) {
			min = arguments[n];
		}		
	}
	return min;
}

console.log(getMin(12,14, 4, -4, 0.2));