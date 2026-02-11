// que ---2  write a prog that takes input from the user
// install package "prompt-sync" for taking input form the user

const prompt = require("prompt-sync")();
let name = prompt("what is your name..?");
console.log("hello ",name);