//given a storted array of leetcode problem 34..
// return the index if target is found, if ot return the index where it would be it is were inserted in order 

//ex  let num =[1,3,4,5] , target = 4
//ouput 2
//ex2  let numa =[1,2,3,5,7,8] , target = 6
//ouput 4

function SearchInsertPosition(arr, target) {
    let len = arr.length
    //  console.log(len);
    if(len === 0) return -1;
    for (let i = 0; i < len; i++) {
        if (arr[i] === target) return i;
        
        else if( (arr[i]>target) ){
            return i;
        }
    }

}


let arr = [1, 2, 3, 4, 5, 6,]
//target = 4
let arr2 = [1, 2, 3, 4, 6, 7]
//target = 5
let result = SearchInsertPosition(arr, 5);
let results = SearchInsertPosition(arr2, 5);
console.log(result,results);



// using binary search => 
    function SearchInsertPosition(arr, target) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (arr[mid] === target) {
            return mid;
        } 
        else if (arr[mid] < target) {
            low = mid + 1;
        } 
        else {
            high = mid - 1;
        }
    }

    // jab target nahi mila
    return low;
}
