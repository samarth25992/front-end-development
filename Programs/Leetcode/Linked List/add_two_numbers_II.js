/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 * 
 * @Problem - https://leetcode.com/problems/add-two-numbers-ii/
 */
var addTwoNumbers = function(l1, l2) {
    
    let list1 = null;
    let list2 = null;
    let final = null;
    let cur1 = l1;
    let cur2 = l2;

    while(cur1) {
        list1 = new ListNode(cur1.val, list1);
        cur1 = cur1.next;
    }

    while(cur2) {
        list2 = new ListNode(cur2.val, list2);
        cur2 = cur2.next;
    }

    let carry = 0;
    while(list1 || list2) {
        let sum = (list1 ? list1.val : 0) + (list2 ? list2.val : 0) + (carry ? carry : 0);
        
        if(sum > 9) {      
            carry = Math.floor(sum / 10);    
            sum = sum % 10;
        } else {
            carry = 0;
        }

        final = new ListNode(sum, final);
        list1 = list1 ? list1.next : null;
        list2 = list2 ? list2.next : null;
    }
    if(carry) {
        final = new ListNode(carry, final);
    }
    return final;
};