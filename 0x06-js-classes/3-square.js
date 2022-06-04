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

    area() {
        return this.size ** 2
    }
}

let s = new Square(3)
console.log(s.size)
console.log(s.area())
console.log(Object.getOwnPropertyNames(s));