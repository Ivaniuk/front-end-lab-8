// input amount of EURO, USD and convert them to an integer
var eur = +prompt('Please, input amount of EURO:');
var usd = +prompt('Please, input amount of USD:');

// check for positive and correct values of the amount of EURO, USD
if ((eur < 0) || (usd < 0) || (isNaN(eur) === true) || (isNaN(usd) === true)) {
	console.log('Incorrect data');
} else {

// 1 euro, 1 dollar exchange rate in hryvnias on 08.02,2018
var oneEur = 33.4602;
var oneUsd = 27.1196;

// convert amount of EURO to UAH
var eurToUah = eur * oneEur;

// rounding off if needed
if (eurToUah % 1 === 0) {
	eurToUah = eurToUah;
} else eurToUah = eurToUah.toFixed(2);

// convert amount of USD to UAH
var usdToUah = usd * oneUsd;

// rounding off if needed
if (usdToUah % 1 === 0) {
	usdToUah = usdToUah;
} else usdToUah = usdToUah.toFixed(2);

// ratio of 1 euro to 1 dollar
var eurToUsd = oneEur / oneUsd;

// rounding off if needed
if (eurToUsd % 1 === 0) {
	eurToUsd = eurToUsd;
} else eurToUsd = eurToUsd.toFixed(2);

console.log('', eur ,"euros are equal", eurToUah ,"UAH,", usd ,"dollars are equal",
 usdToUah ,"UAH, one euro is equal", eurToUsd ,"dollars");
}
