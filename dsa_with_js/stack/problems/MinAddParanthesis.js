//write a program to find how many paranthesis are needed to fulfil valid paranthesis 
 import Stack from './stackClass.js'

// import Stack from './stackClass.js'

function minAddParanthesis(str) {
    let stack = new Stack();
    let count = 0
    for (let i = 0; i < str.length; i++) {
        //check  i  '(' he ya nahi 
        if (str[i] === '(') {
            stack.push(str[i]);
        } else {
            if (stack.isEmpty()) {
                count++
            } else {
                stack.pop()
            }
        }

    }
    let size =  stack.size() ;
    return size + count ;

}
let result = minAddParanthesis("(()()))");
console.log(result)