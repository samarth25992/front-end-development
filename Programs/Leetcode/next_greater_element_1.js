/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 * 
 * @problem - https://leetcode.com/problems/next-greater-element-i/
 */
var nextGreaterElement = function(nums1, nums2) {
    
    let map = new Map();

    nums2.forEach(i => map.set(i,nums2.indexOf(i)));

    let nthIndex = 0;
    nums1.forEach(n => {

        let index = map.get(n) + 1;
        while(nums2[index] < n) {
            index++;
        }
        nums1[nthIndex++] = index > nums2.length - 1 ? -1 : nums2[index];
    });
    
    return nums1;
};