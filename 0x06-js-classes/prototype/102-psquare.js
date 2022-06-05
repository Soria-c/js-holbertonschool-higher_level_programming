#!/usr/bin/node
function Square(size=0, position=[0, 0]) {
  this.errorCheck(size,position)
  this.size = size
  this.pos = position
}

Square.prototype.area = function () {
  return this.size ** 2
}

Square.prototype.errorCheck = function (value=0, array=[0, 0]) {
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

Square.prototype.toString = function () {
  for (let i = 0; i < this.pos[1]; i++) {
    console.log()
  }
  let s = this.size
  let es = " ".repeat(this.pos[0])
  let arr = "#,".repeat(s).split(",").splice(0, s)
  return arr.map((x) => es + x.repeat(s)).join("\n")
}
Square.prototype.valueOf = function () {
  return this.area()
}

Object.defineProperty(Square.prototype, "size", {
  get : function(){
    return this._size
  },
  set: function(value){
    this.errorCheck(value)
    this._size = value;
  }
})

Object.defineProperty(Square.prototype, "pos", {
  get : function(){
    return this._pos
  },
  set: function(value){
    this.errorCheck(0, value)
    this._pos = value;
  }
})

let s = new Square(3, [3, 2])
let s2 = new Square(5, [1, 2])
console.log(s2 + s)
console.log(s2 - s)
console.log(s2 > s)
console.log(s2 < s)
console.log(s2 == s)
console.log(s2 * s)
console.log(s2 / s)