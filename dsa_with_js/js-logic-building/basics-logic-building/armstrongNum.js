//write a program to check if a num is armstrong num or not

function isarmstrong(num) {
  let originalcopy = num;
  let sum = 0;
  let len = num.toString().length;
  while (num > 0) {
    let lastdigit = num % 10;
    sum += lastdigit ** len;
    num = Math.floor(num / 10);
  }
  if (sum === originalcopy) return true;
  else return false;
}
console.log(isarmstrong(370));
