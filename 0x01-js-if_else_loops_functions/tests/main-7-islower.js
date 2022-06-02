#!/usr/bin/node
const isL = require("../7-islower");

console.log(`a is ${isL.isLower("a")? "lower" : "upper"}`)
console.log(`A is ${isL.isLower("A")? "lower" : "upper"}`)
console.log(`H is ${isL.isLower("H")? "lower" : "upper"}`)
console.log(`3 is ${isL.isLower("3")? "lower" : "upper"}`)
console.log(`g is ${isL.isLower("g")? "lower" : "upper"}`)
