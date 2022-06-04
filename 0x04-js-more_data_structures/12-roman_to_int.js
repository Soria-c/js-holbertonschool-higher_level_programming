#!/usr/bin/node

function romanToInt(str) {
  let rS = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100, 
    D: 500, 
    M: 1000
  }
  let l = str.length;
  let sum = 0;
  for (let i = -1; ++i < l;) {
    if (i > 0 && rS[str[i]] > rS[str[i - 1]]) {
      sum += rS[str[i]] - rS[str[i - 1]] * 2
      continue
    }
    sum += rS[str[i]]
  }
  return sum
} 

let romanNumber = "MMMCMXCIX"
console.log(romanToInt(romanNumber))
