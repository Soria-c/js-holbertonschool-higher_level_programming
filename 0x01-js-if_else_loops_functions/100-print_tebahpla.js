#!/usr/bin/node
str = ""
for (let i = 123; --i > 96;) {
  if (!(i % 2)) {
    str += String.fromCharCode(i - 32)
    continue
  }
  str += String.fromCharCode(i)
}
process.stdout.write(str)