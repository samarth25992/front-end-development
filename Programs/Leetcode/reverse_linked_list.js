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
 * 
 * @Problem - https://leetcode.com/problems/reverse-linked-list/
 */

var reverseList = function(head) {
    
    if(head === null) {
        return null;
    }

    let list = null;
    let cur = head;

    while(cur) {
        list = new ListNode(cur.val, list);
        cur = cur.next;
    }

    return list;
};