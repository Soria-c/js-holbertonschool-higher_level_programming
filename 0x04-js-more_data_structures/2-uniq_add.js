#!/usr/bin/node

function uniqAdd(myArray = []) {
  let s = new Set(myArray);
  let sum = 0;
  s.forEach(x => sum += x)
  return sum
} 
let a = [1, 2, 3, 1, 4, 2, 5];
console.log(`Sum: ${uniqAdd(a)}`)

