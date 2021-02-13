/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    
    if(nums1.length < nums2.length) {
        [[nums1], [nums2]] = [[nums2], [nums1]];
    }

    let result = nums2.filter(num => {
        let index = nums1.indexOf(num);
        if(index !== -1)
            nums1[index] = null;
        return index !== -1;
    });

    return result;
};