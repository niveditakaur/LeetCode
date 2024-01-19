/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function(matrix) {
    const n = matrix.length;

    const dp = matrix.map(row => row.slice());

    for (let i = 1; i < n; i++) {
        for (let j = 0; j < n; j++) {
            dp[i][j] += Math.min(
                dp[i - 1][j],                            // directly above
                j > 0 ? dp[i - 1][j - 1] : Infinity,     // diagonally left
                j < n - 1 ? dp[i - 1][j + 1] : Infinity  // diagonally right
            );
        }
    }

    return Math.min(...dp[n - 1]);
};