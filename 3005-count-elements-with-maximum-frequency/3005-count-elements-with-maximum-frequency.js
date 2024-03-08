/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {
    let frequencyMap = {};
    for (let num of nums) {
        frequencyMap[num] = (frequencyMap[num] || 0) + 1;
    }
    
    // Find maximum frequency
    let maxFrequency = 0;
    for (let key in frequencyMap) {
        maxFrequency = Math.max(maxFrequency, frequencyMap[key]);
    }
    
    // Count elements with maximum frequency
    let count = 0;
    for (let key in frequencyMap) {
        if (frequencyMap[key] === maxFrequency) {
            count += maxFrequency;
        }
    }
    
    return count;
};