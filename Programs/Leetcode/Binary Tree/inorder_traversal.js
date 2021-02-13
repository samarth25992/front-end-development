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
 */
var inorderTraversal = function(root) {
    
    let inorder = (root) => {
        if(root) {
            inorder(root.left);
            result.push(root.val);
            inorder(root.right);
        }
    }
    let result = [];
    inorder(root);
    
    return result;
};