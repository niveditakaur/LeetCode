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
 * @return {boolean}
 */
var isEvenOddTree = function(root) {
    if (!root) return true;
    
    let queue = [root];
    let level = 0;
    
    while (queue.length > 0) {
        let size = queue.length;
        let prevValue = level % 2 === 0 ? -1 : Number.MAX_SAFE_INTEGER;
        
        for (let i = 0; i < size; i++) {
            let node = queue.shift();
            
            // Check if the node's value satisfies the conditions
            if (level % 2 === 0) {
                if (node.val % 2 !== 1 || node.val <= prevValue)
                    return false;
            } else {
                if (node.val % 2 !== 0 || node.val >= prevValue)
                    return false;
            }
            
            prevValue = node.val;
            
            // Add children to the queue
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        
        level++;
    }
    
    return true;
};