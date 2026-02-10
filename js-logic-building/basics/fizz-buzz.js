//write a prog to that prints num form 1 to N
// replacing ->
// 1. multiplies of 3 with "fizz"
// 2. multiplies of 5 with 'buzz'
// 3. multiplies of both 3 and 5 with "fizzbuzz"
function fizzbuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzbuzz");
    } else if (i % 3 === 0) {
      console.log("fizz");
    } else if (i % 5 === 0) {
      console.log("buzz");
    } else {
      console.log(i);
    }
  }
}
fizzbuzz(12);
