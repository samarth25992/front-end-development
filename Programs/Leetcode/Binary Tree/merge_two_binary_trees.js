/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 * 
 * @Problem - https://leetcode.com/problems/merge-two-binary-trees/
 */
var mergeTrees = function(t1, t2) {

    if(t1 === null && t2 === null) {
        return null;
    }

    let finalTree = (t1, t2) => {

        if(t1 === null) {
            return t2;
        }
        if(t2 === null) {
            return t1;
        }

        t1.val += t2.val;
        t1.left = finalTree(t1.left, t2.left);
        t1.right = finalTree(t1.right, t2.right);

        return t1;
    }
    
    return finalTree(t1, t2);
};