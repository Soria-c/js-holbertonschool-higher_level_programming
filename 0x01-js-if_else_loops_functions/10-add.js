#!/usr/bin/node

function add(a, b) {
  return a + b
}
console.log(add(2, 3))
console.log(add(-23, 10))
console.log(add(1, 5))

module.exports = {
  add
}
