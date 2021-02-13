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
 * @return {TreeNode}
 * 
 * @Problem - https://leetcode.com/problems/increasing-order-search-tree/
 */
var increasingBST = function(root) {

    let finalRoot = new TreeNode(0);  
    let cur = finalRoot;

    let newTree = (root) => {
        if(root === null) {
            return;
        }

        newTree(root.left);
        cur.right = root;
        root.left = null;
        cur = root;
        newTree(root.right);
    }

    newTree(root);
    return finalRoot.right;
};