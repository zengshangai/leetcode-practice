const TestData = [

  [
    [1,2,4],
    [1,3,4],
  ],
  [
    [],
    [1,3,4]
  ],
  [
    [1,2,4],
    []
  ],
  [
    [2,4,6],
    [1,3,4,7]
  ],
  [
    []
    ,
    []
  ]
]
TestData.forEach((item) =>{
  const [ a, b ] = item
  item.push( a.concat(b).sort((pre, next) => pre - next) )
})
module.exports = TestData