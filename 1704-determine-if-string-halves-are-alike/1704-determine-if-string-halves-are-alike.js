/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    s = s.toLowerCase();
    let a = s.slice(0, s.length / 2).split('');
    let b = s.slice(s.length / 2).split('');
    let vow = ['a', 'e', 'i', 'o', 'u'];
    let aCount = 0;
    let bCount = 0;
    a.forEach((x) => {
        if (vow.includes(x)) {
            aCount++;
        }
    });

    b.forEach((x) => {
        if (vow.includes(x)) {
            bCount++;
        }
    });

    return aCount === bCount;
};