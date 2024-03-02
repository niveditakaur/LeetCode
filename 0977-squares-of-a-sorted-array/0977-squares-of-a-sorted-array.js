/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    const n = nums.length;
    let result = new Array(n);
    let left = 0, right = n - 1;
    let index = n - 1;
    
    while (left <= right) {
        const leftSquare = nums[left] * nums[left];
        const rightSquare = nums[right] * nums[right];
        
        if (leftSquare > rightSquare) {
            result[index] = leftSquare;
            left++;
        } else {
            result[index] = rightSquare;
            right--;
        }
        index--;
    }
    
    return result;
};