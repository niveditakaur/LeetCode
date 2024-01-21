/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function(matches) {
    const n = matches.length;
    const m = 100001;
    const array1 = new Array(m).fill(0);
    const array2 = new Array(m).fill(0);
    const answer = [[], []];

    for (let i = 0; i < n; i++) {
        const [w, l] = matches[i];
        array1[w]++;
        array2[l]++;
    }

    for (let i = 0; i < m; i++) {
        const w = array1[i];
        const l = array2[i];
        if (w > 0 && l === 0) {
            answer[0].push(i);
        }
        if (l === 1) {
            answer[1].push(i);
        }
    }
    
    return answer;
};