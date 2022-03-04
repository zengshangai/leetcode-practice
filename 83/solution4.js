export const desc = "解法四 递归"


export const func = (head) => {
    if(head&&head.next){
        if(head.val === head.next.val){
           head = func(head.next)
           
        }
        else {
            head.next = func(head.next)
        }
    }
    return head
}


export default { 
    desc, 
    func
}