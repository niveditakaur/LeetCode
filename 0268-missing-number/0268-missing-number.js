/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const n = nums.length;
    const expectedSum = n * (n + 1) / 2; // Gauss's formula for sum of 1 to n
    const actualSum = nums.reduce((acc, num) => acc + num, 0);
    return expectedSum - actualSum;
};