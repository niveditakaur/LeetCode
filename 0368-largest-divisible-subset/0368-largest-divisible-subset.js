/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function(nums) {
    if (nums.length === 0) return [];

    // Sort the array
    nums.sort((a, b) => a - b);

    const dp = new Array(nums.length).fill(1);
    let maxSize = 1;
    let maxIndex = 0;

    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] % nums[j] === 0 && dp[i] < dp[j] + 1) {
                dp[i] = dp[j] + 1;
                if (dp[i] > maxSize) {
                    maxSize = dp[i];
                    maxIndex = i;
                }
            }
        }
    }

    const result = [];
    let currSize = maxSize;
    let currVal = nums[maxIndex];
    for (let i = maxIndex; i >= 0; i--) {
        if (currSize === dp[i] && currVal % nums[i] === 0) {
            result.unshift(nums[i]);
            currVal = nums[i];
            currSize--;
        }
    }

    return result;
};