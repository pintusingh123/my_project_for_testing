// write a fun that returns
//  the revrese of a string 

function reverseStr(str) {
    // console.log(typeof str );
    if (typeof str !== 'string') {
        throw new Error("only strings are allowed for reverse printing ")
    }

    let emptystr = "";
    let len = str.length;
    for (let i = len - 1; i >= 0; i--) {
        emptystr += str[i];
    }
    return emptystr

}
// console.log(reverseStr("pintu2"));