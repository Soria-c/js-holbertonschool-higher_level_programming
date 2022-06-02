#!/usr/bin/node
let alphabet = "";

for (let i = 96; ++i < 123;) {
  alphabet += String.fromCharCode(i)
}
console.log(alphabet);
