var longestCommonPrefix = function (strs) {
  let result = strs[0];
  let length = strs.length;
  for (let i = 0; i < length; i++) {
    while (strs[i].indexOf(result) !== 0) {
      result = result.substring(0, result.length - 1);
      if (result == "0") {
        return "";
      }
    }
  }
  return result;
};
