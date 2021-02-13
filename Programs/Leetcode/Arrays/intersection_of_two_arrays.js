/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 * 
 * @Problem - https://leetcode.com/problems/intersection-of-two-arrays/
 */
var intersection = function(nums1, nums2) {
  
    let map = new Map();
    let result = [];

    for(let num of nums1) {
        map.set(num);
    }

    for(let num of nums2) {
        if(map.has(num)) {
            result.push(num);
            map.delete(num);
        }
    }

    return result;
};