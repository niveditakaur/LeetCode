/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function(s, t) {
    if (s.length !== t.length) {
    throw new Error("Input strings must be of the same length");
  }

  const charCount = new Array(26).fill(0);

  for (let i = 0; i < s.length; i++) {
    charCount[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    charCount[t.charCodeAt(i) - 'a'.charCodeAt(0)]--;
  }

  return charCount.reduce((acc, count) => acc + Math.abs(count), 0) / 2; 
};