function MaxEle(arr) {
    let MaxEleArr = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > MaxEleArr) {
           MaxEleArr = arr[i]
        }
    }
    return MaxEleArr


}
let arr = [1, 233, 3, 4, 5, 56]
console.log(MaxEle(arr));

