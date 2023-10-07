const add = function(nOne, nTwo) {
	let res = nOne + nTwo;
  return res;
};

const subtract = function(nOne, nTwo) {
	let res = nOne - nTwo;
  return res;
};

const sum = function(arr) {
  let res = 0;
	for (let i = 0; i < arr.length; ++i) {
    res += arr[i];
  }
  return res;
};

const multiply = function(arr) {
  if (arr.length == 1) {
    return arr[0];
  }
  let res = arr[0];
  for (let i = 1; i < arr.length; ++i) {
    res *= arr[i];
  }
  return res;
};

const power = function(nOne, nTwo) {
	let res = nOne ** nTwo;
  return res;
};

const factorial = function(nOne) {

  if (nOne == 0) {
    return 1;
  }


	let res = nOne;
  for (let i = nOne - 1; i > 0; --i) {
    res *= i;
  }
  return res;
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
