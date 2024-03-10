/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);
    const result = [];
    set1.forEach(num => {
        if (set2.has(num)) {
            result.push(num); 
            set2.delete(num); 
        }
    });
    
    return result;
};