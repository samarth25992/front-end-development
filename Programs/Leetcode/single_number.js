/**
 * @param {number[]} nums
 * @return {number}
 * 
 * @Problem - https://leetcode.com/problems/single-number/
 */
var singleNumber = function(nums) {
    
    let map = new Map();

    nums.forEach(num => {
        if(map.has(num)) {
            let count = map.get(num);
            map.set(num, count + 1);
        } else {
            map.set(num, 1);
        }
    });

    for (let [key, value] of map) { 
        if(value === 1) {
            return key;
        }
    }

    return;
};