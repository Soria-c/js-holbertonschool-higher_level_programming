#!/usr/bin/node
let str = "Python is an interpreted, interactive, object-oriented programming\
 language that combines remarkable power with very clear syntax"
str = str.slice(39, 66) + str.slice(106, 112) + str.slice(0, 6)
console.log(str)
