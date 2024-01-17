/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    const occurrencesMap = new Map();

    for (const num of arr) {
        occurrencesMap.set(num, (occurrencesMap.get(num) || 0) + 1);
    }

    const occurrencesSet = new Set();

    for (const count of occurrencesMap.values()) {
        if (occurrencesSet.has(count)) {
            return false;
        }
        occurrencesSet.add(count);
    }

    return true;
};