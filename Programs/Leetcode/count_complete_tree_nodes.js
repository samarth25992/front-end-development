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
 * @Problem - https://leetcode.com/problems/count-complete-tree-nodes/
 */
var countNodes = function(root) {

    let nodes = (root) => {

        if(root === null) {
            return 0;
        }
        return nodes(root.left) + nodes(root.right) + 1;
    }

    return nodes(root);
};