const { ListNode } = require('../utils/linked-list')
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 * 遍历
 */
 var mergeTwoLists = function(list1, list2) {
  if(list1!=null&&list2!=null){
    if(list1.val<=list2.val){
      let temp = list1
      list1= list1.next
      temp.next =  mergeTwoLists(list1, list2)
      return temp
    }
    else{
      let temp = list2
      list2= list2.next
      temp.next =  mergeTwoLists(list1, list2)
      return temp
    }
  }
  if(list1!=null){
    return list1
  }
  if(list2!=null){
    return list2
  }
  return null
};

// 递归

module.exports = mergeTwoLists