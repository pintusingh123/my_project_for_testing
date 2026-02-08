let obj = {
    name: "abc",
    age: 19,
    address: "jhalawar"
}
console.log(obj.__proto__);
// not recommded way using for in loop  X
// for ( let keys in obj){
//     console.log(keys, obj[keys]);

// }

let objKeys = Object.keys(obj)
let objValues = Object.values(obj)
let objenteries = Object.entries(obj)

// console.log(objKeys);
// console.log(objValues);
// console.log(objenteries);

//looping for reccommedde --- right way 
//  way for looping for of loop
//  jo key array mai use hota hai 
// ---------------
// for (let keys of Object.entries(obj) ){
//     console.log(keys);
    
// }


// function creating inside obj 