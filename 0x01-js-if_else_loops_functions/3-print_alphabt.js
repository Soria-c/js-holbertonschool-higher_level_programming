#!/usr/bin/node
let alphabet = "";

for (let i = 96; ++i < 123;) {
  if (i != 101 && i != 113){
    alphabet += String.fromCharCode(i);
  }
}
console.log(alphabet);
