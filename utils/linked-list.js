function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}
const convertArrayToNodeList = ( arr ) =>{
  let dummy = new ListNode()
  let head = dummy
  for(let i =0 ; i< arr.length; i++){
    head.next = new ListNode(arr[i])
    head = head.next
  }
  return dummy.next
}

module.exports = {
  convertArrayToNodeList,
  ListNode,
}
