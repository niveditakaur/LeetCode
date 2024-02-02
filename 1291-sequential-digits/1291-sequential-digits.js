/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var sequentialDigits = function(low, high) {
    const result = [];
    const allDigits = "123456789";

    const generateSequential = (start, current) => {
        if (current > high) {
            return;
        }

        if (current >= low && current <= high) {
            result.push(current);
        }

        const lastDigit = current % 10;
        const nextDigitIndex = allDigits.indexOf(lastDigit.toString()) + 1;

        if (nextDigitIndex < allDigits.length) {
            const nextDigit = allDigits[nextDigitIndex];
            generateSequential(start * 10 + parseInt(nextDigit), current * 10 + parseInt(nextDigit));
        }
    };

    for (let i = 1; i <= 9; i++) {
        generateSequential(i, i);
    }

    return result.sort((a, b) => a - b);
};