/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if (!head || !head.next) {
        return true; 
    }

    let values = []; 

    let current = head;
    while (current) {
        values.push(current.val);
        current = current.next;
    }

    let left = 0;
    let right = values.length - 1;
    while (left < right) {
        if (values[left] !== values[right]) {
            return false; // Not a palindrome
        }
        left++;
        right--;
    }
    return true;
};