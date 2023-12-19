function largestOddNumber(num) {
  for (let i = num.length - 1; i >= 0; i--) {
    const digit = parseInt(num[i]);
    if (digit % 2 === 1) return num.slice(0, i + 1);
  }
  return "";
}
