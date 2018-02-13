var N = Number( prompt('Please, enter natural number N (0<N<=20):') ),
	block = '[~]',
	blockSum = '[~]',
	gap = '   ',
	startGap = '';

// check to correct value N
if (( N <= 0 ) || ( N > 20 ) || ( N % 1 != 0 )) {
	console.error('Incorrect N!');
} else {
	for (var i = 1; i <= N; i++) {
		
		// determine the initial gap value, which will decrease by 1
		startGap = '';
		for (var j = 1; j <= ( N - i ); j++) {
		startGap = startGap + gap;
		}

		// building a pyramid from top floor to bottom
		var rezult = startGap.concat(blockSum + '\n');		
		console.log(rezult);
		blockSum = blockSum + block + block;	
	}
}