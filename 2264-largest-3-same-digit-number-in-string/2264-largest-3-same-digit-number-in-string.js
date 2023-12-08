var largestGoodInteger = function (num) {
  let maxGoodInteger = "";

  for (let i = 0; i <= num.length - 3; i++) {
    const current = num.substring(i, i + 3);

    if (current[0] === current[1] && current[1] === current[2]) {
      if (current > maxGoodInteger) {
        maxGoodInteger = current;
      }
    }
  }

  return maxGoodInteger === "" ? maxGoodInteger : String(maxGoodInteger);
};
