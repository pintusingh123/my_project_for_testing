// case 1 find fact 
function factorial(num) {
    let result = 1;
    if (num == 0) return 1
    if (num < 0)
        throw new Error("not valid number is less then zero ")
    for (let i = 1; i <= num; i++) {
        result = result * i
    }
    return result
}
// console.log(factorial(-4));

// using recursion 

function recursionFun(num) {
    if(num === 0 || num === 1) return 1;
    if (num < 0) throw new Error("not valid number is less then zero ")
 
        return num * recursionFun(num-1)
}
console.log(recursionFun(5));
console.log(recursionFun(4));
console.log(recursionFun(3));
