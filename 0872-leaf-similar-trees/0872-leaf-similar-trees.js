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
 */
var leafSimilar = function(root1, root2) {
    const leaf1 = [];
    const leaf2 = [];

    // Function to add leaves to the List
    var getLeaves = function(node, storage){
        if(node == null) return;

        if(node.left == null && node.right == null){
            // Leaf found
            storage.push(node.val);
            return;
        }
        
        getLeaves(node.right, storage);
        getLeaves(node.left, storage);
    }

    getLeaves(root1, leaf1);
    getLeaves(root2, leaf2);

    return leaf1.toString() === leaf2.toString();
};