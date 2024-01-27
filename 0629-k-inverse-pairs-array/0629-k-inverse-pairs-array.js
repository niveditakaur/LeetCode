/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kInversePairs = function(n, k) {
    const mod = 1000000007;
    
    const dp = new Array(k + 1).fill(0);

    dp[0] = 1;

    for (let i = 1; i <= n; i++) {
        const prefixSum = [0];
        let total = 0;

        for (let j = 0; j <= k; j++) {
            total = (total + dp[j]) % mod;
            prefixSum.push(total);
        }

        for (let j = 0; j <= k; j++) {
            const upper = Math.max(0, j - i + 1);
            const lower = Math.min(j + 1, k + 1);
            const rangeSum = (prefixSum[lower] - prefixSum[upper] + mod) % mod;
            dp[j] = rangeSum;
        }
    }

    return dp[k];
};