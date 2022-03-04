const { ListNode } = require('../utils/linked-list')
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 * 遍历
 */
 var mergeTwoLists = function(list1, list2) {
   const dummy = new ListNode()
   let head = dummy

   while(list1!==null&&list2!==null){
     if(list1.val <= list2.val){
       head.next = list1
       list1 = list1.next
     }
     else{
       head.next = list2
       list2 = list2.next
     }
     head = head.next
   }
   if(list1!==null){
     head.next = list1
    //  head= head.next
   }
   if(list2!=null){
     head.next = list2
    //  head= head.next

   }
   return dummy.next
};

// 递归

module.exports = mergeTwoLists