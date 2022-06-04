#!/usr/bin/node
class Square {
    constructor(size) {
        this.size = size
    }
}

let s = new Square(2)
console.log(s.size)
console.log(Object.getOwnPropertyNames(s));