// write a prog that genrates a random numer
// input : MAx numer
// Output :random number between 1 and Max numer
// solution we will use math.random() genrates random number between 0 and 1

let minNum = 11; //included
let Maxnumber = 21; // not included

let i = 0;
while (i < 10) {
  console.log(Math.floor(Math.random() * (Maxnumber - minNum) + minNum));
  i++;
}


