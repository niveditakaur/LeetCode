/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    const charMap = new Map();
    
    for (const char of s) {
        charMap.set(char, (charMap.get(char) || 0) + 1);
    }
    
    const sortedChars = Array.from(charMap.entries()).sort((a, b) => b[1] - a[1]);
    
    let sortedString = '';
    for (const [char, count] of sortedChars) {
        sortedString += char.repeat(count);
    }
    
    return sortedString;
};