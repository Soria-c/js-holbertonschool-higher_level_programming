#!/usr/bin/node
function safePrintDivision(a, b) {
  let r = 0 ;
  try {
    if (!b) {
      throw "Cannot divide by 0"
    }
    r = a / b;
  } catch(e) {
    r = null
  } finally {
    console.log(`Inside result: ${r}`)
  }
return r
}
let x = 5;
let y = 2;
console.log(`${x} / ${y} = ${safePrintDivision(x, y)}`)
