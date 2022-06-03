#!/usr/bin/node

function printMatrixInteger(matrix) {
  for ( i of matrix) {
    console.log(i.join(" "))
  }
}

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

printMatrixInteger(matrix)


