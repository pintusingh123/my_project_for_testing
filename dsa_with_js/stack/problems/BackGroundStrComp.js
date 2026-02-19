//Given two strings s and t, return true if they are equal when both
//  are typed into empty text editors. '#' means a backspace character.

// Note that after backspacing an empty text, the text will continue empty. 
import Stack from './stackClass.js'
function backgroundStringCompare(str) {
    let stack = new Stack();
    let result = ""

    for (let i = 0; i < str.length; i++) {
        if (str[i] !== '#') {
            stack.push(str[i])
        } else {
            if (!stack.isEmpty()) {
                stack.pop()
            }
        }

    }
    while(!stack.isEmpty()){
        result = result + stack.pop()
    }

return result;



}
 function comparing(result1 , result2){
    return  backgroundStringCompare(result1) ===  backgroundStringCompare(result2)
 }
 console.log(comparing("abc#d", "abc#d"))
 console.log(comparing("abce#d", "abc#d"))
 console.log(comparing("ab#d", "abc#d"))