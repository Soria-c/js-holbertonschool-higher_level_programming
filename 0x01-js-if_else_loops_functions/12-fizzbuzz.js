#!/usr/bin/node

function fizzbuzz(a, b) {
  let i;
  for (i = 0; ++i < 100;) {
    if (!(i % 3) && !(i % 5)) {
      process.stdout.write("FizzBuzz ")
    } else if (!(i % 3)) { 
      process.stdout.write("Fizz ")
    } else if (!(i % 5)) {
      process.stdout.write("Buzz ")
    } else {
      process.stdout.write(`${i} `)
    }
  }
  console.log("Buzz")
}

fizzbuzz()
module.exports = {
  fizzbuzz
}
