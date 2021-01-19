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
 * @return {number[]}
 * 
 * @Problem - https://leetcode.com/problems/binary-tree-postorder-traversal/
 */
var postorderTraversal = function(root) {

    let result = [];

    let postOrder = (root) => {
        if(root) {
            postOrder(root.left);
            postOrder(root.right);
            result.push(root.val);
        }
    }

    postOrder(root);
    return result;
    
};