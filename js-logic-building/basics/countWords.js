// write the function that counts and returns the number of words in a sentence 
// ex sentens =>  this is a pintu : (4 words)
function countWords(sentence) {
    let count = 0;
    let inWord = false;
    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i] !== ' ' && !inWord) {
            count++;
            inWord = true;
        } else if (sentence[i] === ' ') {
            inWord = false;
        }
    }
    return count
}
console.log(countWords("i am learning java"));
console.log(countWords("i am learning cpp and javascript "));
