function leapyear(year) {
    if(year % 400 === 0 || (year % 4 === 0 && year % 100 != 0) ){
        return "leap year"
    } else {
        return "not a leap year"
    }
}
console.log(leapyear(2023));
