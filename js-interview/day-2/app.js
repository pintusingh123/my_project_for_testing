// let obj ={
//   a:{
//     b:{
//       c: null
//     }
   
//   }
// }
// console.log(obj.a?.b?.c??"default value")
var abc = 25
 
if(function f() {}){
  abc = abc+typeof f
}
console.log(abc)