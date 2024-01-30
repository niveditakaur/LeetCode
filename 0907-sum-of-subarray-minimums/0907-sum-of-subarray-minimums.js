/**
 * @param {number[]} arr
 * @return {number}
 */
var sumSubarrayMins = function(arr) {
    const MOD = 1e9 + 7;
  const stack = [];
  let result = 0;

  for (let i = 0; i <= arr.length; i++) {
    while (stack.length > 0 && (i === arr.length || arr[i] < arr[stack[stack.length - 1]])) {
      const j = stack.pop();
      const left = j - (stack.length > 0 ? stack[stack.length - 1] : -1);
      const right = i - j;
      result = (result + arr[j] * left * right) % MOD;
    }
    stack.push(i);
  }

  return result;
};