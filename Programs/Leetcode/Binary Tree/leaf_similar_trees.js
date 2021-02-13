/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 * 
 * @Problem - https://leetcode.com/problems/leaf-similar-trees
 */
var leafSimilar = function(root1, root2) {
    
    let tree1 = [];
    let tree2 = [];

    let leaves1 = (root1) => {
        if(root1 === null) {
            return null;
        }
        if(root1.left === null && root1.right === null) {
            tree1.push(root1.val);
            return;
        }

        leaves1(root1.left);
        leaves1(root1.right);
    }

    let leaves2 = (root2) => {
        if(root2 === null) {
            return null;
        }
        if(root2.left === null && root2.right === null) {
            tree2.push(root2.val);
            return;
        }

        leaves2(root2.left);
        leaves2(root2.right);
    }

    leaves1(root1);
    leaves2(root2);

    return JSON.stringify(tree1) === JSON.stringify(tree2) ? true : false;
};