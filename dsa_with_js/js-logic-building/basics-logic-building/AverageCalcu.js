// AverageCalcu.js 
// write a function that calculates and returns the average of a set of number 
// Input : array of  positive int numb 
function average(arr) {
 
    if(arr.length === 0 ) return 0;
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]; 
    }
    let avg = sum / arr.length

    return  Number(avg.toFixed(2))
}

console.log(average([1, 2, 4,15]));
