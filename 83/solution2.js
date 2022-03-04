// import { NodeList } from '../utils/linked-list'
/**
 * 给定一个已排序的链表的头 head ， 删除所有重复的元素，使每个元素只出现一次 。返回 已排序的链表 。
 * @param {*} head
 */
export const deleteDuplicates = function (head) {
   /**
    * 晕了 或许应该画图
    * 递归解法三要素
    * 1 找到结束条件
    * 2 想想应该返回什么值
    * 3. 每一步应该做什么
    * https://lyl0724.github.io/2020/01/25/1/
    */
   const targetMap = {

   }
   const recur = (head, map) => {

      if (head) {
         if (map[head.val]) {
            head = recur(head.next, map)
         } else {
            map[head.val] = true
            head.next = recur(head.next, map)
         }
      }
      // else {
      return head
      // }
   }

   return recur(head, targetMap)
};

const desc = "解法二 哈希 + 递归"
export  default {
   func : deleteDuplicates,
   desc
}