/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 * 
 * @problem - https://leetcode.com/problems/same-tree/
 * 
 * Method 1 - Using single recursion function
 */
var isSameTree = function(p, q) {
  
    if(p === null && q === null) 
        return true;
    if(p === null || q === null)
        return false;
    if(p.val !== q.val)
        return false;
    
    return (isSameTree(p.left, q.left) && isSameTree(p.right, q.right));
};

/**
 * Method 2 - Using the inorder traversal
 */

var isSameTree = function(p, q) {
  
    let tree1 = [];
    let tree2 = [];
    
    let inOrder1 = function(p) {
        
        if(p !== null) {
            inOrder1(p.left);
            tree1.push(p.val);
            inOrder1(p.right);
        }
        tree1.push(0);
    }
    
    let inOrder2 = function(q) {
        if(q !== null) {
            inOrder2(q.left);
            tree2.push(q.val);
            inOrder2(q.right);
        }
        tree2.push(0);
    }
    
    inOrder1(p);
    inOrder2(q);
    
    return JSON.stringify(tree1) === JSON.stringify(tree2) ? true : false;
};