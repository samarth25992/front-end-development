/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 * 
 * @Problem - https://leetcode.com/problems/linked-list-cycle/
 */
var hasCycle = function(head) {
    
    let prev = null;
    let map = new Map();

    while(head) {
        if(!map.has(head)) {
            map.set(head);
        } else {
            return true;
        }
        head = head.next;
    }

    return false;
};