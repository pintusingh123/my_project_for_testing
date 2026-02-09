function countVowelConsonant(str) {
    let Vowel = 0, consonants = 0;
    
    const vovelSet = new Set(['a', 'e', 'i', 'o', 'u'])
 for(let ch of str.toLowerCase()){
    if(ch >= 'a' && ch <= 'z') {
        if(vovelSet.has(ch)) Vowel++;
        else consonants++;
    }else{
        console.log(ch ,"is neither vowel or consonants");
        
    }
 }
 return { Vowel , consonants}
}

console.log(countVowelConsonant("Pintu Singh2323"));
