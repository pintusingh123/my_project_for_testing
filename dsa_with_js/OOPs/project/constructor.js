// bank account management system hard code 
function BankAcc(customerName, balance = 0){
  this.customerName = customerName;
  this.accountNumber = Date.now()
  this.balance = balance;

this.deposit = function(amount){
  this.balance += amount
}

this.withdraw = (amount) =>{
  this.balance -= amount
}

}



const accounts = []



// =========================
const accountForm = document.getElementById("AccountForm")
const customerName = document.getElementById("customerName")
const balance = document.getElementById("balance")
// 
const depositForm = document.getElementById("DepositForm")
const accountNumber = document.getElementById("customerNameForDeposit")
const depositAmount = document.getElementById("depositAmount")


accountForm.addEventListener("submit", (even) =>{
  even.preventDefault();
  
  const name  = customerName.value
  const bal = balance.value
  const acc = new BankAcc(name, +bal)

  // console.log(name,  typeof +bal);

  accounts.push(acc)

  console.log(accounts);
  
  
})

///////////

depositForm.addEventListener("submit", (even) =>{
  even.preventDefault();
const account = accounts.find((account) => account.accountNumber === +accountNumber.value)
account.deposit(+depositAmount.value)
console.log(accounts);

})