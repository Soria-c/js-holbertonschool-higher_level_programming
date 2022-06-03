#!/usr/bin/node

function elementAt(myArray, index) {
  return myArray[index]
}

let array = [1, 2, 3, 4, 5];
let idx = 2;
console.log(`Element at index ${idx} is ${elementAt(array, idx)}`)
idx = 5;
console.log(`Element at index ${idx} is ${elementAt(array, idx)}`)
