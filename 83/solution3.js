// 由于是升序  🙅🏻‍♀️🙅🏻  不用使用哈希表 也可以判断是否重复

 const desc = '解法三 遍历'
 

const func = (head) => {
    let p = head;
    // if(p){
        while(p&&p.next){
            if(p.next.val === p.val){
                p.next = p.next.next
            }
            else{
                p = p.next
            }
            
        }
        // if(p)
    // }

    return head
}


// export default { 
//     desc,
//     func
// }
module.exports = {
      desc,
    func  
}