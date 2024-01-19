/**
 * @param {string[]} bank
 * @return {number}
 */
var numberOfBeams = function (bank) {
    let ans = 0, temp = 0;
    for (let i = 0; i < bank.length; i++) {
        let n = (bank[i].match(/1/g) || []).length;
        if (n === 0) continue;
        ans += temp * n;
        temp = n;
    }
    return ans;
};