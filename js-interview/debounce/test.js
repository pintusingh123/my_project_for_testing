function debouce(fun, delay){
  let timerId 

  return function (...args){
    clearTimeout(timerId)

   timerId = setTimeout(() =>{
        fun(...args)
    }, delay)
  }
}

function search(que){
  console.log(que)
}

let result = debouce(search, 1000)

result("a")
result("ab")