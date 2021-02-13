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
 * @return {boolean}
 * 
 * @Problem - https://leetcode.com/problems/univalued-binary-tree/
 */
var isUnivalTree = function (root) {

    let target = root.val;

    let checkTree = (root) => {
        if (root === null) {
            return true;
        }

        if (root.val !== target) {
            return false;
        }

        return checkTree(root.left) && checkTree(root.right);
    }
    return checkTree(root);
};