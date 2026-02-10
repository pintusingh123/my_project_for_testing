//wirte a program to checks if a given string is in alphabetical order or not

function isalphabetical(str) {
  str = str.replace(/\s+/g, "");
  let len = str.length;
  for (let i = 0; i < len - 1 ; i++) {
    if (str[i] > str[i + 1]) {
      return false;
    }

  }
  return true;
}


console.log(isalphabetical("ABCDa"));
