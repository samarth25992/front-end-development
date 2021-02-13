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
 * @param {number} k
 * @return {number}
 * 
 * @Problem - https://leetcode.com/problems/kth-smallest-element-in-a-bst/
 */
var kthSmallest = function(root, k) {
    
    let result = [];
    let inOrder = (root) => {

        if(root) {
            inOrder(root.left);
            result.push(root.val);
            inOrder(root.right);
        }
    }

    inOrder(root);
    return result[k - 1];
};