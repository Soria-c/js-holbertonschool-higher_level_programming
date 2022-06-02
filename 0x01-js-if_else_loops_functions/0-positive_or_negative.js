#!/usr/bin/node

let rand = Math.floor((Math.random() * 21) - 10);
if (!rand) {
  console.log(`${rand} is zero`)
} else if (rand < 0){
  console.log(`${rand} is negative`)
} else {
  console.log(`${rand} is positive`)
}