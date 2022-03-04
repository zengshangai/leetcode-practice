const { convertArrayToNodeList } = require('../utils/linked-list')
const mergeTwoLists = require('./index')
const testArrayData = require('./data')


// 
// 


test('合并两个有序链表', () => {
  for (let i = 0; i < testArrayData.length; i++) {
 
    const [list1, list2, target] = testArrayData[i].map(arr => convertArrayToNodeList(arr))
    const result = mergeTwoLists(list1, list2)

    
    expect(result).toEqual(target);

  }
 
});

