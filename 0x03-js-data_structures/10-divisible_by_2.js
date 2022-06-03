#!/usr/bin/node

function divisibleBy2(myArray = []) {
  return myArray.map((x) => !(Math.abs(x) % 2)? true: false)
}

array = [0, 1, 2, 3, 4, 5, 6]
re = divisibleBy2(array)
for (i in re) {
  console.log(`${array[i]} ${re[i]? "is divisible": "is not divisible"} by 2`)
}


