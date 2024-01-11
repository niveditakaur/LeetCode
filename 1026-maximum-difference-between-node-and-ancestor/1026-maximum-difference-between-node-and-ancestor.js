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
var maxAncestorDiff = function(root) {
    if (!root) {
        return 0;
    }

    let maxDiff = 0;

    function dfs(node, maxSoFar, minSoFar) {
        if (!node) {
            return;
        }

        maxDiff = Math.max(maxDiff, Math.abs(node.val - maxSoFar), Math.abs(node.val - minSoFar));

        maxSoFar = Math.max(maxSoFar, node.val);
        minSoFar = Math.min(minSoFar, node.val);

        dfs(node.left, maxSoFar, minSoFar);
        dfs(node.right, maxSoFar, minSoFar);
    }

    dfs(root, root.val, root.val);
    return maxDiff;
};