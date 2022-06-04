#!/usr/bin/node

function multiplyArrayMap(ar, n) {
  return ar.map((x) => x * n)
} 

let array = [1, 2, 3, 4, 6];

console.log(multiplyArrayMap(array, 4))
console.log(array)
