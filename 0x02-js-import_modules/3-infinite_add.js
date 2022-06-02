#!/usr/bin/node
let sum = BigInt(0);
let arg = process.argv;

for (let i = 1; ++i < arg.length;) {
  sum += BigInt(arg[i])
}
console.log(String(sum))
