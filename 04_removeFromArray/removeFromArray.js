const removeFromArray = function(arr, foo, goo, hoo, joo, loo) {


  let res = [];

  for (let i = 0; i < arr.length; ++i) {
    if (arr[i] === foo || arr[i] === goo || arr[i] === hoo || arr[i] === joo || arr[i] === loo) {
      // do nothing
    }
    else {
      res.push(arr[i]);
    }
  }
  return res;
};

// Do not edit below this line
module.exports = removeFromArray;
