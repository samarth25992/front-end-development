/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    
    if(root === null) {
        return null;
    }

    if(val === root.val) {
        return root;
    }

    return val < root.val ? searchBST(root.left, val) : searchBST(root.right, val);
};