function debounce(fn , delay){
  let timer;
   
  return function(...args){
    clearTimeout(timer);
    timer = setTimeout(()=>{
      fn(...args)
    })
  }

}

function search(query){
  console.log("print search", query)

}

let searchWithDebounce = debounce(search, 500)

searchWithDebounce("h")
searchWithDebounce("ha")
searchWithDebounce("har")
searchWithDebounce("hard")