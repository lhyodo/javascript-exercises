const fibonacci = function(n) {
  // 1 1 2 3 5 8 13 21 ...

  if (n <= 0) {
    return "OOPS";
  }

  const res = [];
  res[0] = 1;
  res[1] = 1;
  for (let i = 2; i < n; ++i) {
    res[i] = res[i - 1] + res[i - 2];
  }
  return res[n - 1];

};

// Do not edit below this line
module.exports = fibonacci;
