/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function (s) {
    const indices = new Map();
    let maxLen = -1;
    for (let i = 0; i < s.length; i++) {
        if (indices.has(s[i])) {
            maxLen = Math.max(maxLen, i - indices.get(s[i]) - 1);
        } else {
            indices.set(s[i], i);
        }
    }
    return maxLen;
};