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
var pseudoPalindromicPaths  = function(root) {
    let count = 0;

    const dfs = (node, freq) => {
        if (!node) return;

        freq[node.val] = (freq[node.val] || 0) + 1;

        if (!node.left && !node.right) {
            // Check if the path is pseudo-palindromic
            let oddCount = 0;
            for (let key in freq) {
                if (freq[key] % 2 === 1) {
                    oddCount++;
                }
            }
            if (oddCount <= 1) {
                count++;
            }
        }

        dfs(node.left, { ...freq });
        dfs(node.right, { ...freq });
    };

    dfs(root, {});
    return count;
};