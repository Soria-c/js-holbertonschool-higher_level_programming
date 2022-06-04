#!/usr/bin/node
function Square (size) {
    this.size = size
}
let s = new Square(3)
console.log(s.size)
console.log(Object.getOwnPropertyNames(new Square));