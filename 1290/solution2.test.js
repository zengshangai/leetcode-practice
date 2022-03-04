const { convertArrayToNodeList } = require('../utils/linked-list')
const {getDecimalValue} = require('./solution2')
const testArrayData = require('./data')


// 
// 


test('二进制链表转整数-解法2', () => {
  for (let i = 0; i < testArrayData.length; i++) {
    
    const {list, number} = testArrayData[i]
    const node = convertArrayToNodeList(list)

    const result = getDecimalValue(node)

    
    expect(result).toEqual(number);

  }
 
});

