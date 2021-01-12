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
 */
let findTilt = function(root) {
    
    if(root === null)
        return;

    let diff = Math.abs(this.findTilt(root.left) - this.findTilt(root.right));
    root.data = diff;
};

let totaltilt = 0;
let valueSum = function(node) {
    
    if(node === null) {
        return 0;
    }

    let leftsum = valueSum(node.left);
    let rightsum = valueSum(node.right);
    let tilt = Math.abs(leftsum - rightsum);
    totaltilt += tilt;
    
    return node.data;
}
