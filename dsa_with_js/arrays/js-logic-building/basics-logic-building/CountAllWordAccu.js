//Problem samjho (plain English)

// “Given ek sentence/string hai,
// hame har word kitni baar aaya ye find karna hai.”

function countAllWordAccu(str){
  str = str.split(" ")
  console.log(str);
  let count = {}
  for(let i = 0; i< str.length ; i++){
    let word = str[i];
    if(count[word]){
      count[word]++
    }else{
      count[word] = 1
    }
  }
  return count
}
console.log(countAllWordAccu("hello world hello apna world hello"));
