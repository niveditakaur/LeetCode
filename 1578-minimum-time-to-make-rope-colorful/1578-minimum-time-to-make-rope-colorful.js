/**
 * @param {string} colors
 * @param {number[]} neededTime
 * @return {number}
 */
var minCost = function(colors, neededTime) {
    let time = 0;
    const n = colors.length;
    
    for (let i = 1; i < n; i++) {
        if (colors[i] === colors[i - 1]) {
            time += Math.min(neededTime[i], neededTime[i - 1]);
            neededTime[i] = Math.max(neededTime[i], neededTime[i - 1]);
        }
    }
    
    return time;
};