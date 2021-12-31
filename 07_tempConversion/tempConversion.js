function roundDecimals(theNumber, decimalPlaces) {
	return Number(Math.round(theNumber + 'e' + decimalPlaces) + 'e-' + decimalPlaces);
};

const ftoc = function(tempF) {
  let tempC = roundDecimals(((tempF - 32) * 5 / 9), 1);
  return tempC;
};

const ctof = function(tempC) {
  let tempF = roundDecimals((tempC * (9 / 5) + 32), 1);
  return tempF;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
