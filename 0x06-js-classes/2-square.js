#!/usr/bin/node
class Square {
    constructor(size) {
        if (!Number.isInteger(size)) {
            throw "size must be an integer"
        }
        if (size < 0) {
            throw "size must be >= 0"
        }
        this.size = size
    }
}

let s = new Square(-1)
console.log(s.size)
console.log(Object.getOwnPropertyNames(s));