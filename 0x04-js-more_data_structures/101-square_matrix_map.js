#!/usr/bin/node

function squareMatrixSimple(matrix) {
    return matrix.map((x) => x.map((y) => y ** 2))
} 

let m = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(squareMatrixSimple(m))
