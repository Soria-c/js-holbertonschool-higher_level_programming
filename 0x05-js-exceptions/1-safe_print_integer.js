#!/usr/bin/node
function safePrintInteger(value) {
  try {
    if (!Number.isInteger(value)) {
      throw `${value} is not an integer`
    }
    console.log(value)
  } catch (e) {
    console.log(e)
    return false
  }
  return true
}

console.log(safePrintInteger("asd"))
