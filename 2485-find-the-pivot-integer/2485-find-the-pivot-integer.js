/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function(n) {
    const totalSum = n * (n + 1) / 2;
    
    for (let x = 1; x <= n; x++) {
        const sumBeforeX = x * (x - 1) / 2;
        const sumAfterX = totalSum - sumBeforeX - x;
        
        if (sumBeforeX === sumAfterX) {
            return x;
        }
    }
    
    return -1;
};