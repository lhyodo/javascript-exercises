const repeatString = function(foo, n) {
  if (n < 0) {
    return "ERROR";
  }
  let goo = '';
  for (let i = 0; i < n; ++i) {
    goo += foo;
  }
  return goo;
};

// Do not edit below this line
module.exports = repeatString;
