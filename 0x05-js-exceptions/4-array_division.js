#!/usr/bin/node
function arrayDivision(array1, array2, l) {
  let result = [];
  let r = 0;
  for(let i = 0; i < l; i++) {
    try {
      if (!array2[i]) {
        throw "division by 0"
      } else if (isNaN(array1[i]) || isNaN(array2[i])) {
        throw "wrong type"
      }
      r = array1[i] / array2[i]
    } catch(e) {
      r = 0
    } finally {
      result.push(r)
    }
  }
  return result
}
let a = [10, 8, 4];
let b = [2, 5, 4];
console.log(arrayDivision(a, b, b.length))
