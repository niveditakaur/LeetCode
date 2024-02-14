/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
    let positives = [];
    let negatives = [];
    for (let num of nums) {
        if (num >= 0) {
            positives.push(num);
        } else {
            negatives.push(num);
        }
    }
    
    // Rearrange the array alternating positive and negative integers
    let result = [];
    let i = 0;
    let j = 0;
    while (i < positives.length && j < negatives.length) {
        result.push(positives[i++]);
        result.push(negatives[j++]);
    }
    
    // Add remaining positive or negative integers if any
    while (i < positives.length) {
        result.push(positives[i++]);
    }
    while (j < negatives.length) {
        result.push(negatives[j++]);
    }
    
    return result;
};