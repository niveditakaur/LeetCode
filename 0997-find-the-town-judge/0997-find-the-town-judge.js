/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    const trustsGiven = new Array(n + 1).fill(0);
    const trustsReceived = new Array(n + 1).fill(0);

    for (const [a, b] of trust) {
        trustsGiven[a]++;
        trustsReceived[b]++;
    }

    for (let i = 1; i <= n; i++) {
        if (trustsReceived[i] === n - 1 && trustsGiven[i] === 0) {
            return i;
        }
    }

    return -1;
};