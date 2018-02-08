// input length of sides of triangle and convert them to an integer
var a = +prompt('Input length of first side "a" of triangle:');
var b = +prompt('Input length of second side "b" of triangle:');
var c = +prompt('Input length of third side "c" of triangle:');

// half-perimeter of a triangle
var p = (a + b + c) / 2;

// triangle square by Heron's formula	
var square = Math.sqrt(p * (p - a) * (p - b) * (p - c));

// rounding off if needed
if (square % 1 === 0) {
	square = square;
} else square = square.toFixed(2);

// check for positive values of the triangle sides and check the square for zero, NaN inequality
if ((a <= 0) || (b <= 0) || (c <= 0) || (square === 0) || (isNaN(square) === true)) {
	console.log('Incorrect data');
}

// right triangle is checked by the Pythagorean theorem
else if ((a * a + b * b === c * c) || (a * a + c * c === b * b) || (b * b + c * c === a * a)) {
	var type = 'right';	
	console.log('Type of triangle is', type ,'triangle and square is', square);	 
} 

// equilateral triangle
else if ((a === b) & (a === c)) {
	var type = 'equilateral';
	console.log('Type of triangle is', type ,'triangle and square is', square);	 
} 

// isosceles triangle
else if ((a === b) || (a === c) || (b === c)) {
	var type = 'isosceles';	
	console.log('Type of triangle is', type ,'triangle and square is', square);	 
} 

// scalene triangle
else if ((a !== b) & (a !== c) & (b !== c)) {
	var type = 'scalene';	
	console.log('Type of triangle is', type ,'triangle and square is', square);	 
} 








 
