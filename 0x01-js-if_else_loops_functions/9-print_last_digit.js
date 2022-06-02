#!/usr/bin/node

function printLastDigit(n) {
  let r = Math.abs(n) % 10;
  process.stdout.write(`${r}`)
  return r
}

module.exports = {
  printLastDigit
}
