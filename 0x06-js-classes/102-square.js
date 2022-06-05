#!/usr/bin/node
class Square {
  #size;
  #pos;
  constructor(size=0, position=[0, 0]) {
    this.#errorCheck(size, position)
    this.#size = size
    this.#pos = position
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
  set pos(value) {
    this.#errorCheck(0, value)
    this.#pos = value
  }
  get pos() {
    return this.#pos
  }
  valueOf() {
    return this.area();
  }
  toString() {
    for (let i = 0; i < this.#pos[1]; i++) {
      console.log()
    }
    let s = this.#size
    let es = " ".repeat(this.#pos[0])
    let arr = "#,".repeat(s).split(",").splice(0, s)
    return arr.map((x) => es + x.repeat(s)).join("\n")
  }

  #errorCheck(value=0, array=[0, 0]) {
    if (!Number.isInteger(value)) {
      throw "size must be an integer"
    }
    if (value < 0) {
      throw "size must be >= 0"
    }
    if (!array[Symbol.iterator] || array.length != 2) {
      throw "position must be an array of 2 positive integers"
    }
    if (!Number.isInteger(array[0]) || !Number.isInteger(array[1])) {
      throw "position must be an array of 2 positive integers"
    }

  }

}

let s = new Square(3, [3, 2])
let s2 = new Square(5, [1, 2])
console.log(s2 + s)
console.log(s2 - s)
console.log(s2 > s)
console.log(s2 < s)
console.log(s2 == s)
console.log(s2 * s)
console.log(s2 / s)

