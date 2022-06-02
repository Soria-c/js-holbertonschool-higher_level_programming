#!/usr/bin/node
for (let i = -1; ++i < 9;) {
  for (let j = i; ++j < 10;) {
    process.stdout.write(`${i}${j}`);
    if (i < 8) {
      process.stdout.write(", ")
    }
  }
}
console.log()
