const palindromes = function (str) {

  let res = str;
  res = str.toLowerCase();
  res = res.replaceAll(',', '');
  res = res.replaceAll('!', '');
  res = res.replaceAll(" ", '');
  res = res.replaceAll('.', '');

  for (let i = 0, j = res.length - 1; i < res.length; ++i, --j) {
    if (res[i] != res[j]) {
      return false;
    }
  }
  return true;


};

// Do not edit below this line
module.exports = palindromes;
