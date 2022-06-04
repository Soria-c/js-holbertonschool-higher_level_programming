#!/usr/bin/node
class Square {
  #size;
  constructor(size) {
    this.#errorCheck(size)
    this.#size = size
  }

  area() {
    return this.#size ** 2
  }

  set size(value) {
    this.#errorCheck(value)
    this.#size = value
  }
  get size() {
    return this.#size
  }

  #errorCheck(value) {
    if (!Number.isInteger(value)) {
      throw "size must be an integer"
    }
    if (value < 0) {
      throw "size must be >= 0"
    }
  }
}

let s = new Square(3)
console.log(s.size)
console.log(s.area())
s.size = 4
console.log(s.size)
console.log(s.area())