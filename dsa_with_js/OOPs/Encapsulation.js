//Encapsulation.js

//withought using encap
// using obj 
let str = {
    name: "Rahul",
    rollNum: 2002,
    study: function () {
        console.log("study....");
    }
}
// str.study()

let user = {
    name: "Amit",
    balance: 1000,

    getBalance() {
        return this.balance;
    }
};


// console.log(user.getBalance()); // 1000

user.balance = 20
//Direct access allowed (not fully safe)
// console.log(user.getBalance()); //20 bad practice 

// ...............................
// better encapsulation using class but high memo used and slower

// class BankAcc {
//     constructor(name, balance) {
//         let _name = name;
//         let _balance = balance;

//         this.getName = function () {
//             return _name;
//         }

//         this.getbalance = function () {
//             return _balance;
//         }
//     }
// }
// let acc = new BankAcc("pintu", 5999);
  
// console.log( acc.getName())
 
 
//  console.log(acc._balance)
//  console.log(acc.getbalance())
//  console.log(acc)

class BankAcc {
  #balance;

  constructor(balance) {
    this.#balance = balance;
  }

  getBalance() {
    return this.#balance;
  }
}

let obj = new BankAcc(300)
console.log(obj.balance = 200) 
console.log(obj.getBalance()) 