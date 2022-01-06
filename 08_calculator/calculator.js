const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	let total = 0
  for (part of array) {
    total += part;
  }
  return total;
};

const multiply = function(factors) {
  let total = 1
  for (factor of factors) {
    total *= factor;
  }
  return total;
};

const power = function(a, b) {
	let i = 1;
  let total = a
  while (i < b) {
    total = total * a;
    ++i;
  }
  return total;
};

const factorial = function(a) {
	if (a === 0 || a === 1) {
    total = 1;
  } else {
      total = a;
      for (let i = a ; i > 1 ; i--) {
        total = total * (i - 1);
    }
  };
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
