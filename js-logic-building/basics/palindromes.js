function palindrome(str) {
    // case ----1 TWO POINTER APPROCH 
    let start = 0;
    let end = str.length -1 ;
    while(start < end){
        if(str[start] !== str[end]) return false;
        start++;
        end--;
    }
    return true

// case ---2
    // let arrstr = str.split('');
    // console.log(str);
    // let  reversestr = [...arrstr].reverse().join("")


    // // console.log(reversestr);
    // if (str == reversestr) {
    //     console.log("str is palindromes", reversestr + " = " + str);

    // } else {
    //     console.log("str is not palindromes", reversestr + " != " + str)

    // }

    // case2 -----3

    // for (let i = 0; i <= str.length / 2; i++) {
    //     if (str[i] !== str[str.length - 1 - i]) {
    //         return false
    //     }

    // }
    // return true


}
console.log(palindrome("madam"));

// palindrome("hello");