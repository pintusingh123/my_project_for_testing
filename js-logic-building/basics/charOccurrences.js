//charOccurrences.js
// write a function that  counts the occurrences of each character in a given str ,

function count(str) {
  let box = {};
  str = str.toLowerCase().replace(/\s+/g, "");
  for (let i = 0; i < str.length; i++) {
    if (box[str[i]] === undefined) {
      box[str[i]] = 0;
    }
    box[str[i]] = box[str[i]] + 1;
  }
  return box;
}

console.log(count("hello Pintu Kese Ho"));
