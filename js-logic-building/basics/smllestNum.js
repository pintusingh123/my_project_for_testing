function smallestNum(a,b,c){
// case ---1

    if(a <= b && a <= c){
        return a;
    }
      if(b <= a && b <= c){
        return b;
    }

    if(c <= a && c <= b){
        return c;
    }
    // case ---2 

    let minNum = a;
    if(b < minNum) minNum = b;
    if(c < minNum) minNum = c;
    return minNum
}
  
// console.log(smallestNum(1,4,2));
