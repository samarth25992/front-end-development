/**
 * @param {number[]} nums
 * @return {number}
 * 
 * @Problem - https://leetcode.com/problems/majority-element/
 */
var majorityElement = function(nums) {
    
    let map = new Map();

    nums.forEach(num => {
        if(map.has(num)) {
            map.set(num, map.get(num) + 1);
        } else {
            map.set(num, 1);
        }
    });

    for (let [key, value] of map) {
        if(value > (nums.length / 2)) {
            return key;
        }
    }
};