/**
 * @param {string} s
 * @return {number}
 */
var minimumLength = function(s) {
    let left = 0;
    let right = s.length - 1;
    
    while (left < right && s[left] === s[right]) {
        const target = s[left];
        while (left <= right && s[left] === target) left++;
        while (right >= left && s[right] === target) right--;
    }
    
    return Math.max(0, right - left + 1);
};