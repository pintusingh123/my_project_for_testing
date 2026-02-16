//swaping two  numbers without using third variable
let a = 5;
let b= 10;
console.log("Before swaping a = " + a + " and b = " + b);
// using third vari 

// let c = b;
// b = a;
// a = c;
// console.log("After swaping a = " + a + " and b = " + b);

// without using third variable
a = a + b;
b = a - b;
a = a-b;
console.log("After swaping a = " + a + " and b = " + b);
