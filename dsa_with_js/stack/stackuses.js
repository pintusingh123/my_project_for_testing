import Stack from "./Stack.js"

let stack = new Stack()
 stack.push(10)
 stack.push(11)
 stack.push(12)
 stack.push(13)
 
//  for(let i = stack.items.length-1; i>=0; i--){
//     console.log(stack.items[i])
//  }

stack.print()
console.log(stack.size())
 
//  console.log("peack ele", stack.peek())
//  console.log("pop ele", stack.pop())
//   console.log("peack ele", stack.peek())
//   console.log("isEmpty ele", stack.isEmpty())