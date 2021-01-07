/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    const l = digits.length;
    digits[l - 1]++;
    for (let i = l - 1; i >= 0; i--) {
        const n = digits[i];
        if (n === 10) {
            digits[i] = 0;
            digits[i - 1] !== undefined ? ++digits[i -1] : digits.unshift(1);
        } else {
            break;
        }
    }
    return digits;
};