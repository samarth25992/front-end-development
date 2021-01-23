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
var oddEvenList = function(head) {
    
    let head1 = head;
    let head2 = head.next;

    while(head1!== null) {
        head1.next = head1.next.next;
        head2.next = head2.next.next;
    }
};