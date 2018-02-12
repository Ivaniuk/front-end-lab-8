var N = +( prompt('Please, enter natural number N (0<N<=20):') );

// check to correct value N
if (( N <= 0 ) || ( N > 20 ) || ( N % 1 != 0 )) {
	console.error('Incorrect N!');
} else {
	var block = '[~]',
		blockSum = '[~]',
		gap = '   ',
		startGap = '';

	for (var i = 1; i <= N; i++) {
		
		// determine the initial gap value
		startGap = '';
		for (var j = 1; j <= ( N - i ); j++) {
		startGap = startGap + gap;
		}

		// building a pyramid from top floor to bottom
		rezult = startGap + blockSum;
		console.log(rezult);
		blockSum = blockSum + block + block;	
	}
}