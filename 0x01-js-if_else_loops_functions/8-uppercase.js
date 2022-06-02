#!/usr/bin/node

function toUpper(str) {
  newString = ""
  for (i of str) {
    let ascii = i.charCodeAt()
    if ( ascii > 96 && ascii < 123) {
      newString += String.fromCharCode(ascii - 32);
      continue;
    }
    newString += i
  }
  console.log(newString)
}

module.exports = {
  toUpper
}
