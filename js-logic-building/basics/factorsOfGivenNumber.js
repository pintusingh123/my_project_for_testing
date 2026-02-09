// factorsOfGivenNumber.js
// write a program that finds all the factors of a given number 
// input : number , positive numb, 
// return factors of a number 
// Factors is a number that  ...
// divides the given number evenly or exactly, leaving no remainder 
// ex 4 : 1,2,3 
function Factors(num){
    if(num < 1) {
        throw new Error("input should be a grater then zero")
    }
    let arr = [];
    for(let i=1; i<=num; i++){
        if(num % i === 0){
             arr.push(i)
        }
    }
    return arr
}
console.log(Factors(0));
