#!/usr/bin/node

function updateObject(obj, key, value) {
  return {...obj, ...{[key]: value}}
  
} 

const objc = { 
  language: "C", 
  Number: 89, 
  track: "Low level", 
  ids: [1, 2, 3]
};

console.log(objc)
console.log(updateObject(objc, "language", "python"))
