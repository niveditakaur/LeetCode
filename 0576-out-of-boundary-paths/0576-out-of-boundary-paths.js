/**
 * @param {number} m
 * @param {number} n
 * @param {number} maxMove
 * @param {number} startRow
 * @param {number} startColumn
 * @return {number}
 */
var findPaths = function(m, n, maxMove, startRow, startColumn) {
    const MOD = 1000000007;
    const dp = new Array(m).fill(0).map(() => new Array(n).fill(0));

    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];

    const isValid = (i, j) => i >= 0 && i < m && j >= 0 && j < n;

    dp[startRow][startColumn] = 1;
    let count = 0;

    for (let move = 1; move <= maxMove; move++) {
        const newDp = new Array(m).fill(0).map(() => new Array(n).fill(0));

        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                for (const [dx, dy] of directions) {
                    const ni = i + dx;
                    const nj = j + dy;

                    if (!isValid(ni, nj)) {
                        count = (count + dp[i][j]) % MOD;
                    } else {
                        newDp[ni][nj] = (newDp[ni][nj] + dp[i][j]) % MOD;
                    }
                }
            }
        }

        dp.splice(0, dp.length, ...newDp);
    }

    return count;
};