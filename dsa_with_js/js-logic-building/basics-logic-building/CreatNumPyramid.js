function pyramid(params) {

  for (let i = 1; i <= params; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
      row += j + ' ';
    }
    console.log(row);
  }
}
pyramid(5)