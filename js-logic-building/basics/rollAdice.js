// write a program that similates rolling a dice
function rollDice(){
let random = Math.floor(Math.random() * 6 ) + 1
return random
}
let result = rollDice()
console.log(result);
