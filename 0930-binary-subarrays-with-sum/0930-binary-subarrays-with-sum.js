/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function(nums, goal) {
    let count = 0;
    let sum = 0;
    let frequency = {};
    frequency[0] = 1; 
    
    for (let num of nums) {
        sum += num;
        
        if (frequency[sum - goal]) {
            count += frequency[sum - goal];
        }
        
        frequency[sum] = (frequency[sum] || 0) + 1;
    }

    return count;
};