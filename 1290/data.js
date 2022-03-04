const TestData = [


  {
    list: [1, 1, 0],
  },

  {
    list:   [],
  },

  {
    list: [1],
  },


  {
    list: [1, 0, 0, 0, 1, 0, 1],
  },

  {
    list: [1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1],
  },

]
TestData.forEach((item) => {
  let number = 0;
  const list = item.list 
  const len = list.length - 1
  for(let i=0; i<list.length; i++){

    number = number +   list[i] * Math.pow(2 ,  len - i)
  }
  item.number = number

})
module.exports = TestData