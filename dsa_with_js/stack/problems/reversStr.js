class Stack {
    #mystack = [];

    push(ele){
        this.#mystack.push(ele)
    }
    pop(){
        if(this.#mystack.length === 0) {
            throw new Error("stack is empty")
        }
        return this.#mystack.pop()
    }
    print(){
        for(let i = this.#mystack.length - 1; i>=0 ; i--){
            console.log(this.#mystack[i])
        }
    }
    isEmpty(){
        return this.#mystack.length === 0
    }
    peek(){
        return this.#mystack[this.#mystack.length - 1];
    }
    size(){
        return this.#mystack.length
    }
}

// const stack = new Stack()
// stack.push(1)
// stack.push(2)
// stack.push(3)
 
//   stack.print()
function reverseStr(str){
    if(str.length === 0 || str.length === ""){
        throw new Error("your given Str is empty")
    }
const stack = new Stack();
let revers = "";
for(let ch of str){
    stack.push(ch);
}
 while(!stack.isEmpty()){
    revers = revers + stack.pop();
 }
return revers;

}
 const result =  reverseStr("pintu")
 console.log(result)