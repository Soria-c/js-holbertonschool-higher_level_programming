#!/usr/bin/node

function replaceInArray(myArray, index, element) {
  if (index > myArray.length - 1 || index < 0) {
    return myArray
  }
  myArray[index] = element
  return myArray
}

let array = [1, 2, 3, 4, 5];
let idx = 5;
let newElement = 9;
let newArray = replaceInArray(array, idx, newElement)

console.log(array)
console.log(newArray)


