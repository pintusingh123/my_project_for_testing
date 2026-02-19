//leetcode 20 
import Stack from './stackClass.js'
function valid(str) {
    let stack = new Stack();
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '(' || str[i] === '{' || str[i] === '[') {
            stack.push(str[i]);
        } else {
            if (stack.isEmpty()) {
                return false;

            }
            else if (str[i] === ')') {
                if (stack.peek() != '(') {
                    return false;
                } else stack.pop()
            }
            else if (str[i] === '}') {
                if (stack.peek() != '{') {
                    return false;
                } else stack.pop();
            }
            else if (str[i] === ']') {
                if (stack.peek() != '[') {
                    return false;
                } else stack.pop();
            }
        }
    }
    return stack.isEmpty()

}
let result = valid('()(({}))[][]]]')
console.log(result);