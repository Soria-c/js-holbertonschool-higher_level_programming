#!/usr/bin/node

function poww(a, b) {
  return a ** b
}
console.log(poww(2, 3))
console.log(poww(-2, 10))
console.log(poww(1, 5))

module.exports = {
  poww
}
