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
 
    while(tail){
      layer+=1
      tail = tail.next
    }
    const recur = ( node, layer ) => {

      if(node){
        return node.val * Math.pow( 2, layer - 1) + recur(node.next, layer - 1)
      }
      else{
        return 0
      }
    }
    return recur(head, layer)



};

module.exports = {
  getDecimalValue
}