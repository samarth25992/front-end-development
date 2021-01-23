/**
 * @param {number[]} nums
 * @return {number}
 * 
 * @Problem - https://leetcode.com/problems/find-the-duplicate-number/
 */
var findDuplicate = function(nums) {
    
    let map = new Map();

    for(let num of nums) {
        if(map.has(num)) {
            return num;
        } else {
            map.set(num, "");
        }
    }
};