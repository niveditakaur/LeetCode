/**
 * @param {string[]} arr
 * @return {number}
 */
var maxLength = function(arr) {
    function hasUniqueCharacters(str) {
        let set = new Set();
        for (let char of str) {
            if (set.has(char)) {
                return false;
            }
            set.add(char);
        }
        return true;
    }

    function backtrack(index, currentString) {
        if (index === arr.length) {
            if (hasUniqueCharacters(currentString)) {
                maxLength = Math.max(maxLength, currentString.length);
            }
            return;
        }

        backtrack(index + 1, currentString + arr[index]);

        backtrack(index + 1, currentString);
    }

    let maxLength = 0;
    backtrack(0, '');

    return maxLength;
};