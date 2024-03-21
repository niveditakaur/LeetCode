/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function(list1, a, b, list2) {
    let node1 = list1;
    let count = 0;

    while (count < a - 1) {
        node1 = node1.next;
        count++;
    }

    let beforeA = node1;

    while (count < b + 1) {
        node1 = node1.next;
        count++;
    }

    let afterB = node1;

    beforeA.next = list2;

    let endOfList2 = list2;
    while (endOfList2.next !== null) {
        endOfList2 = endOfList2.next;
    }

    endOfList2.next = afterB;

    return list1;
};