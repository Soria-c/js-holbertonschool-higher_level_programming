#!/usr/bin/node

function deleteAt(myArray = [], idx = 0) {
  delete myArray[idx]
  myArray.splice(idx, 1)
  return myArray
}

let array = [1, 2, 3, 4, 5]
let idx = 6
console.log(deleteAt(array, idx), array)

