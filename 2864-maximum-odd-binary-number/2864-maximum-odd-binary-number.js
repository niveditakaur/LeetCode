/**
 * @param {string} s
 * @return {string}
 */
var maximumOddBinaryNumber = function(s) {
    const onesCount = (s.match(/1/g) || []).length;
    const zerosCount = s.length - onesCount;

    return "1".repeat(onesCount - 1) + "0".repeat(zerosCount) + "1";
};