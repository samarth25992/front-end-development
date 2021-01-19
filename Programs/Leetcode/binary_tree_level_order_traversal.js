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
 * @return {number[][]}
 * 
 * @Problem - https://leetcode.com/problems/binary-tree-level-order-traversal/
 */
var levelOrder = function(root) {
    let queue = [root];
    let result = [];
    if(root === null) {
        return [];
    } else {
        while(queue.length) {
            
            let level = [];
            let length = queue.length;

            for(let i = 0; i < length; i++) {
                let node = queue.shift();
                level.push(node.val);

                if(node.left !== null)
                    queue.push(node.left);
                if(node.right !== null)
                    queue.push(node.right);
            }

            result.push(level);
        }
    }
    return result;
};