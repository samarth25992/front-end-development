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
 * @return {boolean}
 * 
 * @Problem - https://leetcode.com/problems/two-sum-iv-input-is-a-bst/
 */
var findTarget = function(root, k) {
    
    let result = [];
    let inOrder = (root) => {
        if(root) {
            inOrder(root.left);
            result.push(root.val);
            inOrder(root.right);
        }
    }

    inOrder(root);
    
    let min = 0;
    let max = result.length - 1;

    while(min < max) {
        let sum = result[min] + result[max];

        if(sum === k) {
            return true;
        }
        if(sum > k) {
            max--;
        } else {
            min++;
        }
    }
    return false;
};