#!/usr/bin/node
let i;
for (i = -1; ++i < 99;) {
  process.stdout.write(`${String(i).padStart(2, "0")}, `);
}
console.log(i);
