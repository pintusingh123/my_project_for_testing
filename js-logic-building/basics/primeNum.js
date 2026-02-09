// primeNum.js
// wirte a function that if the given num is prime or not 
// prime numer is a num that can only be divided by itself and only 1 without remainders 
function Prime(num){
  if (num <= 1) return false;
    if(num === 2) return true;

    for(let i = 2;i*i<=num; i++){
    if(num % i === 0){
        return false;
    }
}
return true;
}
console.log(Prime(37));
