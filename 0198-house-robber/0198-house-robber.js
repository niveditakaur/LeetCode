/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    const n = nums.length;
    
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return nums[0];
    }
    
    let prevMax = 0;
    let currentMax = 0;
    
    for (let i = 0; i < n; i++) {
        const temp = currentMax;
        currentMax = Math.max(prevMax + nums[i], currentMax);
        prevMax = temp;
    }
    
    return Math.max(prevMax, currentMax);
};