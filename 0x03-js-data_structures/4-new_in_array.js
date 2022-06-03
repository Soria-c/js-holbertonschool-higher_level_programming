#!/usr/bin/node

function newInArray(myArray, index, element) {
  if (index > myArray.length - 1 || index < 0) {
    return myArray.map((el) => {
      return el
    })
  }
  return myArray.map((el) => {
    return myArray.indexOf(el) == index ? element : el
  })
}

let array = [1, 2, 3, 4, 5];
let idx = 0;
let newElement = 9;
let newArray = newInArray(array, idx, newElement)

console.log(array)
console.log(newArray)


