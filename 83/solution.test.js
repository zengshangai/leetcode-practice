import  solution from './solution';
import  solution2 from './solution2';
import  solution3 from './solution3';
import  solution4 from './solution4';

const allSolutions = []

allSolutions.push(solution)
allSolutions.push(solution2)
allSolutions.push(solution3)
allSolutions.push(solution4)


import  TestData from './data'
import { convertArrayToNodeList } from '../utils/linked-list'

describe( 'leetcode 83' , () =>{
  beforeAll(()=>{
      // console.log('leetcode 83 测试开始')
  })

  allSolutions.forEach( (solution ) => {
    const { desc , func } = solution
    test( desc , () =>{
      TestData.forEach( item =>{
        const {input ,output } = item
        const [ inputNode , targetNode] = [input ,output].map(convertArrayToNodeList)
    
        const result = func(inputNode)
        // console.log(result)
        expect(result).toEqual(targetNode)
      } )
    })
  })




  afterAll(()=>{
    // console.log('leetcode 83 测试结束')
})
})