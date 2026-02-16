function MultiplicationTable(num, range) {
    let updateNum = 0
    for (let i = 1; i <= range; i++) {
        updateNum = num * i;
        console.log(num + "*" + i + "=" +updateNum)
    }


}
MultiplicationTable(2, 10)
