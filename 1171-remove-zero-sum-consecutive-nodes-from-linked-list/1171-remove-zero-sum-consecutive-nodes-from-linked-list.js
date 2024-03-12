/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var removeZeroSumSublists = function(head) {
    let dummy = new ListNode(0);
    dummy.next = head;
    let map = new Map();
    let sum = 0;
    let current = dummy;
    
    while (current !== null) {
        sum += current.val;
        if (map.has(sum)) {
            let prev = map.get(sum).next;
            let tempSum = sum;
            while (prev !== current) {
                tempSum += prev.val;
                map.delete(tempSum);
                prev = prev.next;
            }
            map.get(sum).next = current.next;
        } else {
            map.set(sum, current);
        }
        current = current.next;
    }
    
    return dummy.next;
};