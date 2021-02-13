/**
 * @Problem - https://leetcode.com/problems/number-of-1-bits/solution/
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {

    let bits = 0;
    let mask = 1;

    for (let i = 0; i < 32; i++) {
        if ((n & mask) !== 0) {
            bits++;
        }

        mask <<= 1;
    }

    return bits;
};