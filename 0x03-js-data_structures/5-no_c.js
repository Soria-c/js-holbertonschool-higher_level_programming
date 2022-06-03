#!/usr/bin/node

function noC(str) {
  return str.replace(/c/ig, "") //regular expression
}

console.log(noC("Best School"))
console.log(noC("Chicago"))
console.log(noC("C is fun!"))




