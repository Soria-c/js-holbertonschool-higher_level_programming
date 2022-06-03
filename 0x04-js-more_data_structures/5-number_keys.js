#!/usr/bin/node

function numberKeys(obj) {
  return Object.keys(obj).length
} 


const objc = { 
  language: "C",
  number: 13,
  track: "Low level"
}
console.log(numberKeys(objc))
