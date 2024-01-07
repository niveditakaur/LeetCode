/**
 * @param {number[]} jobDifficulty
 * @param {number} d
 * @return {number}
 */
var minDifficulty = function (jobDifficulty, d) {
    const n = jobDifficulty.length;
    if (n < d) return -1;

    const dp = new Array(d + 1).fill(0).map(() => new Array(n + 1).fill(Number.MAX_SAFE_INTEGER));
    dp[0][0] = 0;

    for (let i = 1; i <= d; i++) {
        for (let j = 1; j <= n; j++) {
            let maxDifficulty = 0;
            for (let k = j - 1; k >= i - 1; k--) {
                maxDifficulty = Math.max(maxDifficulty, jobDifficulty[k]);
                dp[i][j] = Math.min(dp[i][j], dp[i - 1][k] + maxDifficulty);
            }
        }
    }

    return dp[d][n] === Number.MAX_SAFE_INTEGER ? -1 : dp[d][n];
};