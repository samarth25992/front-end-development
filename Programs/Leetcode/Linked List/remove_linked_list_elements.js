/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 * 
 * @Program - https://leetcode.com/problems/remove-linked-list-elements/submissions/
 */
var removeElements = function(head, val) {
    
    let cur = head;
    let prev = null;
    while(cur) {
        if(cur.val === val) {
            if(prev === null) {
                head = cur.next;
                cur = head;
                continue;
            } else {
                prev.next = cur.next;
                cur = cur.next;
                continue;           
            }
        }  
        prev = cur;
        cur = cur.next;   
    }
    return head;
};