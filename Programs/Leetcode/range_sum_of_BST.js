/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 * 
 * @Problem - https://leetcode.com/problems/range-sum-of-bst/
 */
var rangeSumBST = function(root, low, high) {
    
    let sum = 0;
    let calculateSum = (root, low, high) => {
        if(root === null) {
            return 0;
        }
    
        if(root.val >= low && root.val <= high) {
            sum += root.val;
        }
        calculateSum(root.left, low, high);
        calculateSum(root.right, low, high);
    }
    
    calculateSum(root, low, high);
    return sum;
};