{
  //## CLOSURES - Functions Remember Their Birthplace

// ### What is a Closure?

// **Closure** = A function that **remembers** variables from its **outer scope** even after the outer function has finished executing.
function outer() {
    const message = "Hello";

    function inner() {
        console.log(message);  // Accesses outer's variable
    }

    return inner;  // Return the function
}

const myFunction = outer();  // outer() finishes executing
myFunction();  // "Hello" - but how does it still remember "message"?

[
//   **What just happened?**

// 1. `outer()` runs and creates `message`
// 2. `inner()` is defined INSIDE `outer()` - it "closes over" `message`
// 3. `outer()` returns `inner` and finishes
// 4. Normally, `message` would be garbage collected... **BUT**
// 5. `inner` still has a reference to `message` - this is a **closure**!
// 6. When we call `myFunction()` (which is `inner`), it still remembers `message`
]
 
}

{

// ### Real-World Example 1: Private Variables
// Closures let you create **truly private** variables!


function createBankAccount(initialBalance) {
    let balance = initialBalance;  // PRIVATE - can't be accessed directly

    return {
        deposit: function(amount) {
            balance += amount;
            return balance;
        },

        withdraw: function(amount) {
            if (amount > balance) {
                return "Insufficient funds";
            }
            balance -= amount;
            return balance;
        },

        getBalance: function() {
            return balance;
        }
    };
}

const myAccount = createBankAccount(100);

console.log(myAccount.getBalance());  // 100
myAccount.deposit(50);  // 150
myAccount.withdraw(30);  // 120

// Can't directly access or modify balance!
console.log(myAccount.balance);  // undefined
myAccount.balance = 9999999;  // Doesn't work!
console.log(myAccount.getBalance());  // 120 - still protected

// Why this works: All three methods (deposit, withdraw, getBalance) are closures that remember the balance variable!
}

{
  // {
//   var a = 12;
//   let b = 10;
//   console.log(a);
// }
// var a = 20;
// var a = 30;

// console.log(a);

// function greet() {
//   var d = 29;
//   function incree(){
//     console.log("i am increment fun");
    
//   }

//   return incree;
// }
//  let count = greet();
//  count();
//  console.log(count);
  
//  agar mere pass kisi fun ka Reference hai to me us fun ko call kr skta hu jis vari mai mene use store kiya ho us vari ke through 

}