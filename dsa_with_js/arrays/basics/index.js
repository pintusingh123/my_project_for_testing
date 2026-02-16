//array with stirng
let arr = ["akash", "arvind", "pintu", "arjun"];
// console.log(arr);

//accesing by indexec: 
// console.log(arr[0]);
// console.log(arr[1]);

//array wiht numbers:
let arr2 = [1, 2, 3, 4, 5, 6]
// console.log(arr2);

//array of an object:
let arr3 = [
    {
        name: "pintu",
        class: 12,
        address: "jhalawar"
    },
    {
        name: "rakesh",
        class:14,
        address:"kota"
    },
    {
        name: "ravina",
        class:10,
        address:"ahmdabad"
    },
    {
        name: "ravi",
        class: 8,
        address:"bundi"
    },
]


// console.log(arr3);

//array constructor for add dynamic values in a arrays
let arraContro = new Array();
arraContro[0] = 1;
arraContro[1] = 2;
// console.log(arraContro);

//  
let str = "pintu"
let ans = Array.from(str);
// console.log(ans); //output [ 'p', 'i', 'n', 't', 'u' ]

//array  destructuring assinmengt 
let fruits = ['banana', 'kela','mango',]
let one = fruits[0]
let two = fruits[1]
let three = fruits[2]

let [one1,two2,thre3 ,four ] = fruits;
console.log(one1,two2,thre3 ,four); 
//output { banana kela mango undefined }

// leetcode search insert position: 35



 

