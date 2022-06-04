#!/usr/bin/node

function weightAverage(matrix) {
  let mul = 0;
  let div = 0;
  for (i of matrix) {
    mul += i[0] * i[1]
    div += i[1]
  }
  return mul / div
} 

let array = [[1, 2], [2, 1], [3, 10], [4, 2]]
console.log(weightAverage(array))
