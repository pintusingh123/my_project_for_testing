
import Stack from './stackClass.js'


function check(str) {

    const stack = new Stack();
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '(') {
            stack.push(str[i]);
        } else {
            if (stack.isEmpty()) {
                return 0;
            }else{
                stack.pop();
            }
        }
    }
    return stack.isEmpty()
}
let result = check('()((()())')
console.log(result)