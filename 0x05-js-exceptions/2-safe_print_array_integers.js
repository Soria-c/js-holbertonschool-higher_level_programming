#!/usr/bin/node
function safePrintInteger(myArray, x) {
  let i = 0;
  let s = 0;
  if (!(myArray[Symbol.iterator])) {
    return 0
  }
  try {
    if (x > myArray.length) {
      throw "Index out of range"
      }
        for (; i < x; i++) {
          if (!Number.isInteger(myArray[i])) {
            continue
          }  
          process.stdout.write(`${myArray[i]}`)
          s++
        }
        console.log()
    } catch (e) {
        console.log(e)
    }
  return s
}

console.log(safePrintInteger([1, 2, 3.4], 3))
