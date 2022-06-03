#!/usr/bin/node

function simpleDelete(obj, key) {
  delete obj[key]
  
} 

const objc = { 
  language: "C", 
  Number: 89, 
  track: "Low level", 
  ids: [1, 2, 3]
};

console.log(objc)
simpleDelete(objc, "track")

console.log(objc)
