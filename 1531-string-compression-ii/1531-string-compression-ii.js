/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLengthOfOptimalCompression = function (s, k) {
    function getLength(count) {
        if (count === 1) return 1;
        else {
            if (count < 10) return 2;
            else {
                if (count < 100) return 3;
                else return 4;
            }
        }
    }

    const n = s.length;
    const dp = new Array(n + 1).fill(0).map(() => new Array(k + 1).fill(0));

    for (let i = n; i >= 0; i--) {
        for (let j = 0; j <= k; j++) {
            if (i === n) {
                dp[n][j] = 0;
                continue;
            }
            dp[i][j] = (j > 0) ? dp[i + 1][j - 1] : Number.MAX_SAFE_INTEGER;
            let del = j, count = 0;
            for (let l = i; l < n && del >= 0; l++) {
                if (s[l] === s[i]) {
                    count++;
                    dp[i][j] = Math.min(dp[i][j], getLength(count) + dp[l + 1][del]);
                } else {
                    del--;
                }
            }
        }
    }
    return dp[0][k];
};