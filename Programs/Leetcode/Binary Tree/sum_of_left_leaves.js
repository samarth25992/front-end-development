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
 * @return {number}
 * 
 * @Problem - https://leetcode.com/problems/sum-of-left-leaves/
 */
var sumOfLeftLeaves = function(root) {
    
    let sum = 0;
    let totalSum = (root, isLeft = false) => {
        if(root === null) {
            return null;
        }

        if(root.left === null && root.right === null && isLeft) {
            return root.val;
        }
    
        let left = totalSum(root.left, true);
        let right = totalSum(root.right, false);

        return left + right;
    }
    
    return totalSum(root);
};