// write a program to check if a given number is perfct num or not 
// perfect num is a number that is equal to the sum of its proper divisors 
// ex 6,28,496  
// 6 : 1,2,3 = 1+2+3 = 6 true;
// 6/1 = rem is 0 , 6/2 = rem is 0 , 6/3 = rem is 0 ,  
// 28 : 1,2,4,7,14 = 1+2+4+7+14 = 28 true;
 function isPerfectNumber(n) {
    let sum = 0;

    for (let i = 1; i <= n / 2; i++) {
        if (n % i === 0) {
            sum += i;
        }
    }

    if (sum === n && n !== 0) {
        console.log("Perfect Number");
    } else {
        console.log("Not a Perfect Number");
    }
}

// Example
isPerfectNumber(6);   // Perfect Number
isPerfectNumber(28);  // Perfect Number
isPerfectNumber(10);  // Not a Perfect Number
