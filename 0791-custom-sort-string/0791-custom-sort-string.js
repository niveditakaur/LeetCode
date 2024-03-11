/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function(order, s) {
    const charFrequency = {};
    
    for (let char of s) {
        if (charFrequency[char]) {
            charFrequency[char]++;
        } else {
            charFrequency[char] = 1;
        }
    }
    
    let result = '';
    
    for (let char of order) {
        if (charFrequency[char]) {
            result += char.repeat(charFrequency[char]);
            delete charFrequency[char]; 
        }
    }
    
    for (let char in charFrequency) {
        result += char.repeat(charFrequency[char]);
    }
    
    return result;
};