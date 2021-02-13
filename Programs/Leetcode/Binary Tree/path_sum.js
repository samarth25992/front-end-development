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
 * @param {number} sum
 * @return {boolean}
 * 
 * @Problem - https://leetcode.com/problems/path-sum/
 */
var hasPathSum = function(root, sum) {
  
    if(root === null)
        return false;

    if(sum - root.val === 0 && root.left === null && root.right === null)
        return true;

    return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val);

};