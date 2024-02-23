/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function(n, flights, src, dst, k) {
    const dp = Array(k + 2).fill(null).map(() => Array(n).fill(Infinity));
    
    // Initialize source cost to 0
    for (let i = 0; i <= k + 1; i++) {
        dp[i][src] = 0;
    }
    
    for (let i = 1; i <= k + 1; i++) {
        for (const [from, to, price] of flights) {
            dp[i][to] = Math.min(dp[i][to], dp[i - 1][from] + price);
        }
    }
    
    return dp[k + 1][dst] === Infinity ? -1 : dp[k + 1][dst];
};