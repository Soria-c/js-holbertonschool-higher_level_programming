#!/usr/bin/node

function printSortedObject(obj) {
  const sortObj = Object.keys(obj).sort().reduce(function (result, key) {
    result[key] = obj[key];
    return result;
  }, {})
  for (k in sortObj) {
    console.log(`${k}: ${sortObj[k]}`)
  }
} 


const objc = { 
  language: "C", Number: 89, track: "Low level", ids: [1, 2, 3]
}
printSortedObject(objc)