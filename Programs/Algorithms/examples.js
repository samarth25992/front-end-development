/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    
    let permutations = [];
    for (let i = 0; i < nums.length; i++) {

        let result = [nums[i]];
        for (let j = 0; j < nums.length; j++) {

            if(j === i) {
                continue;
            }

            result.push(nums[j]);
        }

        permutations.push(result);
    }

    return permutations;
};