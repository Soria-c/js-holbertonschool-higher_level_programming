#!/usr/bin/node

function addConstArray(array1 = [], array2 = []) {
 if (array1.length >= array2.length) {
  return array1.map((x, i) => array2[i]? x + array2[i]: x)
 } 
 return array2.map((x, i) => array1[i]? x + array1[i]: x)
}

const arr = [];
const arr2 = [88 , 11, 4, 5];

console.log(addConstArray(arr, arr2))
