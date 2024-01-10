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
 * @param {number} start
 * @return {number}
 */
var amountOfTime = function(root, start) {
    let maxi = Number.MIN_SAFE_INTEGER;

    const calculateInfectionTime = (node, target, isStartNode) => {
        if (!node) return 0;

        if (node.val === target && isStartNode) {
            maxi = Math.max(maxi, calculateInfectionTime(node, target, false) - 1);
            return -1;
        }

        const leftHeight = calculateInfectionTime(node.left, target, isStartNode);
        const rightHeight = calculateInfectionTime(node.right, target, isStartNode);

        if (leftHeight < 0 || rightHeight < 0) {
            maxi = Math.max(maxi, Math.abs(leftHeight) + Math.abs(rightHeight));
            return Math.min(leftHeight, rightHeight) - 1;
        }

        return Math.max(leftHeight, rightHeight) + 1;
    };

    calculateInfectionTime(root, start, true);
    return maxi;
};