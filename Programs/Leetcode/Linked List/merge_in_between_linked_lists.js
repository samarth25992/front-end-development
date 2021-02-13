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
 * 
 * @Problem - https://leetcode.com/problems/merge-in-between-linked-lists/
 */
var mergeInBetween = function(list1, a, b, list2) {
    
    let counter = 0;
    let cur = list1;
    let athNode = null;
    let bthNode = null;

    while(counter < b) {
        if(counter === a - 1) {
            athNode = cur;
        }
        cur = cur.next;
        counter++;
    }
    bthNode = cur;

    cur = list2;
    while(cur.next) {
        cur = cur.next;
    }

    athNode.next = list2;
    cur.next = bthNode.next;

    return list1;
};