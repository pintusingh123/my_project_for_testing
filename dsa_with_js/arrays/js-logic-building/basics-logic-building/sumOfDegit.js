function sum(num) {
    // case -----1 

    if(num < 1){
        throw new Error("Please enter a positive number ")
    }
    let sum = 0;

    while (num > 0){
        let ele = num % 10;
        sum += ele;
    num = Math.floor(num / 10)
    }

        return sum

    // case ------  2 
    let strnum = num.toString()

    let splitarr = strnum.split('')

    let sumOfDegits = 0;
    splitarr.forEach(ele => {
        let converStrToInt = parseInt(ele)
        sumOfDegits += converStrToInt;

    });
    return sumOfDegits;


}
console.log(sum(21022));
