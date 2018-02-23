function debounce(callback, timeDelay) {
	let timeoutId = 0;
	
	return function() {

		clearTimeout(timeoutId);

		timeoutId = setTimeout(callback, timeDelay);	
    };
}

// let iterator = 0;

// function increaseIteratorBy1() {
//   iterator++; 
//   printIteratorValue();
// }

// function printIteratorValue() {

//   console.log('Iterator value ', iterator);
// }

// let increaseIterator = debounce(increaseIteratorBy1, 1000);

// increaseIterator(); 
// increaseIterator();
// increaseIterator();
// increaseIterator();
// increaseIterator();// Iterator value 1
