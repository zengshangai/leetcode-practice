/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
 var getDecimalValue = function(head) {
  let layer = 0 ;
  let tail = head ;
  let result = 0;
  while(tail){
    layer+=1
    tail = tail.next
  }

  while(head){
    result += head.val * Math.pow( 2  , layer -1)
    layer--
    head = head.next
  }

    return result

};

module.exports = {
  getDecimalValue
}