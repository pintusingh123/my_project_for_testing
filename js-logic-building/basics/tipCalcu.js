//write a program that calculates the tip amounts based on the bill total and percentages of enterd by the user 
function calculateTip(billAmount, tipPercentage){
  let tipAmount = (billAmount * tipPercentage) /100;
  tipAmount = tipAmount.toFixed(0)
  let totalBill = (billAmount + parseFloat(tipAmount))
 let result = {
  tip : tipAmount,
  total : totalBill
 }
 return result;
}
console.log(calculateTip(12112.5,5));
