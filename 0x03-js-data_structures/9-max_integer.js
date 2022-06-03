#!/usr/bin/node

function maxInteger(myArray = []) {
  return myArray.sort().reverse()[0]
}

array = [1, 90, 2, 13, 34, 5, -13, 3]
console.log(`Max: ${maxInteger(array)}`)

