/**
 * @param {string[]} words
 * @return {boolean}
 */
var makeEqual = function (words) {
    const freq = new Array(26).fill(0);

    for (const word of words) {
        for (const char of word) {
            const index = char.charCodeAt(0) - 'a'.charCodeAt(0);
            freq[index]++;
        }
    }

    for (const count of freq) {
        if (count % words.length !== 0) {
            return false;
        }
    }

    return true;
};