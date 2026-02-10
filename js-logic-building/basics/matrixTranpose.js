// Solving the Matrix Transpose
// case --1 3*3 matrix ke liye 
// function Matrix(MatrixArr){
// let n = MatrixArr.length;
 
// for(let i = 0; i<n; i++){
//     for(let j = i+1; j<n; j++){
//         let temp = MatrixArr[i][j];
//         MatrixArr[i][j] = MatrixArr[j][i];
//         MatrixArr[j][i] = temp;
//     }
// }
// return MatrixArr;
// }
// let MatrixArr = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9],
// ];
// console.log(Matrix(MatrixArr));

// case ----2 2*3 matrix ke liye 
function transposeMatrix(matrix) {
  let rows = matrix.length;
  let cols = matrix[0].length;

  let transpose = [];

  for (let i = 0; i < cols; i++) {
    transpose[i] = [];

    for (let j = 0; j < rows; j++) {
      transpose[i][j] = matrix[j][i];
    }
  }

  return transpose;
}

let MatrixArr = [
  [1, 2, 3],
  [4, 5, 6]
];

console.log(transposeMatrix(MatrixArr));

