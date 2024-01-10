/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findMatrix = function (nums) {
    const frequency = {};
    let result = [];

    for (const num of nums) {
        if (!(num in frequency)) {
            frequency[num] = 0;
        }
        frequency[num]++;
    }

    let uniqueValues = Object.keys(frequency);

    while (uniqueValues.length > 0) {
        let newRow = [];

        for (const value of uniqueValues) {
            newRow.push(parseInt(value));
            frequency[value]--;

            if (frequency[value] === 0) {
                delete frequency[value];
            }
        }

        result.push(newRow);
        uniqueValues = Object.keys(frequency);
    }

    return result;
};