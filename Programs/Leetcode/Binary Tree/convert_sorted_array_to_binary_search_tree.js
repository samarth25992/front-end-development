/**
 * @Problem - https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/
 */

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

var sortedArrayToBST = function(nums) {

    if(nums.length === 0)
        return null;
    if(nums.length === 1) {
        return new TreeNode(nums[0]);
    }
    
    let index = Math.floor(nums.length / 2);
    let node = new TreeNode(nums[index]);

    node.left = sortedArrayToBST(nums.slice(0, index));
    node.right = sortedArrayToBST(nums.slice(index + 1, nums.length));

    return node;
};

sortedArrayToBST([-10,-3,0,5,9]);