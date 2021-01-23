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
    
    let cur = head;
    let head2 = null;
    while(cur) {
        head2 = new ListNode(cur.val, head2);
        cur = cur.next;
    }

    while(head !== null && head2 !== null) {
        if(head.val !== head2.val) {
            return false;
        }
        head = head.next;
        head2 = head2.next;
    }
    if(head === null && head2 === null) {
           return true;
       }

    return false;
};