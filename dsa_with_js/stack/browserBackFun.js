//browserBackFun.js
import promptsync from 'prompt-sync'
import Stack from './Stack.js'

const prompt = promptsync()
const stack = new Stack()
let exit = false
while (!exit) {

    const userChoice = prompt(`pls select one of the below choices
    1 press 1 to add a new domain
    2 press 2 to see the current domain
    3 press 3 to go back
    4 press 4 to exit
    `)
    const userChoiceNumber = parseInt(userChoice)
    console.log(userChoiceNumber)

    switch (userChoiceNumber) {
        case 1:
            let DomainName = prompt("please Enter new domain Name: ")
            stack.push(DomainName)
            console.log(DomainName, " is now Open")
            break;

       case 2:
        const currentDomain = stack.peek()
          console.log("current domain is: ", currentDomain)
         break;

         case 3:
            stack.pop()
            console.log("current domain is: ", stack.peek())
            break;
        case 4:
             exit = true
             break;
    }
}