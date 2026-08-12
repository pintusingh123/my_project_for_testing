function add(a){
  return function(b){
    if(b !== undefined ){
// call add func for sum with recursion
     sum = add(a+b)
     return sum
    }
    else{
      return a
    }
  }
}

ans = add(1)(2)(3)(4)(5)()
console.log(ans)