#!/usr/bin/node

function removeCharAt(s, index) {
  let newString = "";
  for (i in s) {
    if (i == index) {
      newString += ""
      continue
    }
    newString += s[i]
  }
  return newString
}

module.exports = {removeCharAt}