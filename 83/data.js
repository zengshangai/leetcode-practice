const testData = [

  {
    input:  [1,1,2],
    // output: [1,2]
  },
  {
    input: [1,2,3,4,4,5,5,6]
  },
  {
    input: [1,1,1]
  },
  {
    input: []
  },
  {
    input: [1, 1, 2,2,4,6,7,7,8,8,8]
  }

]
testData.forEach( (item ) =>{
  const {input} = item
  item.output = [...new Set(input)]
})

// console.log(testData)

module.exports = testData