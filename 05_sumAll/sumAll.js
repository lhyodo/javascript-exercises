const sumAll = function(none, ntwo) {

  if (none < 0 || ntwo < 0) {
    return "ERROR";
  }
  if (typeof none != 'number' || typeof ntwo != 'number') {
    return "ERROR";
  }


  let min = 0;
  let max = 0;
  if (none > ntwo) {
    max = none;
    min = ntwo;
  } else {
    max = ntwo;
    min = none;
  }

  let res = 0;
  for (let i = min; i <= max; ++i) {
    res += i;
  }
  return res;
};

// Do not edit below this line
module.exports = sumAll;
