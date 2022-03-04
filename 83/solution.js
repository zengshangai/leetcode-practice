// import { NodeList } from '../utils/linked-list'
/**
 * 给定一个已排序的链表的头 head ， 删除所有重复的元素，使每个元素只出现一次 。返回 已排序的链表 。
 * @param {*} head
 */
export const deleteDuplicates = function (head) {
  // const dummy = new NodeList()
  const targetMap = {};
  let p = head;
  if (p) {
    targetMap[p.val] = true;
    while (p.next) {
      if (targetMap[p.next.val]) {
        p.next = p.next.next;
      } else {
        targetMap[p.next.val] = true;
        p = p.next;
      }
    }
  }


  return head;
};

export const desc = '解法一 哈希 + 遍历链表'

export default {
  func: deleteDuplicates,
  desc
}