const reverse = require('./reverse')

let arr = [1, 2, 3]

test('逆转功能', () => {
  expect(reverse(arr)).toEqual([3,2,1]);
})