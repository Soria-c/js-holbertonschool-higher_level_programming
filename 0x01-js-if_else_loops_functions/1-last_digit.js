#!/usr/bin/node

let rand = Math.floor((Math.random() * 20001) - 10000);
let lastDigit = (Math.abs(rand) % 10);

if (!lastDigit) {
  console.log(`Last digit of ${rand} is ${lastDigit} and is 0`)
} else if (lastDigit > 5) {
  console.log(`Last digit of ${rand} is ${lastDigit} and is greater than 5`)
} else if (lastDigit < 6) {
  console.log(`Last digit of ${rand} is ${lastDigit} and is less than 6`)
}
