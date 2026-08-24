function debounce(fun, delay){
  let timerId;
  return function(...args){
    clearTimeout(timerId)
    timerId =  setTimeout(() => {
      fun(...args)
      
    },  delay);
  }

}

const search = (query) =>{
  console.log("searching for query",query);
  
}
const searchwithdebounc = debounce(search, 1000)

searchwithdebounc("ha")
searchwithdebounc("har")
searchwithdebounc("hard")
searchwithdebounc("hard j")
searchwithdebounc("hard js")