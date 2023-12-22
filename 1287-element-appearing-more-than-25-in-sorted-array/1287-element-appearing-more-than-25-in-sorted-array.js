var findSpecialInteger = function (arr) {
  const threshold = Math.floor(arr.length / 4);
  const count = {};

  for (let num of arr) {
    count[num] = (count[num] || 0) + 1;

    if (count[num] > threshold) {
      return num;
    }
  }
};
