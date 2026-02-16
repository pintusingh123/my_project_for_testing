//write a program that checks if two given strings are anagrams of each other 
// input : two string 
function isAnagrames(str1, str2) {
    str1 = str1.toLowerCase().replace(/\s+/g, "");
    str2 = str2.toLowerCase().replace(/\s+/g, "");
    if (str1.length !== str2.length) return false;

    let charobj1 = {};
    for (let i = 0; i < str1.length; i++) {
        if (charobj1[str1[i]] === undefined) {
            charobj1[str1[i]] = 0;
        }
        charobj1[str1[i]] = charobj1[str1[i]] + 1;
    }
    let charobj2 = {};
    for (let i = 0; i < str2.length; i++) {
        if (charobj2[str2[i]] === undefined) {
            charobj2[str2[i]] = 0;
        }
        charobj2[str2[i]] = charobj2[str2[i]] + 1;
    }
    for (let key in charobj1) {
        if (charobj1[key] !== charobj2[key]) {
            return false;
        }
    }
    return true;
}
console.log(isAnagrames("pools", "spool"));
