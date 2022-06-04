#!/usr/bin/node
function Square(size) {
  this.errorCheck(size)
  this.size = size
}

Square.prototype.area = function () {
  return this.size ** 2
}

Square.prototype.errorCheck = function (value) {
  if (!Number.isInteger(value)) {
    throw "size must be an integer"
  }
  if (value < 0) {
    throw "size must be >= 0"
  }
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

let s = new Square(3)
console.log(s.size)
console.log(s.area())
s.size = 4
console.log(s.size)
console.log(s.area())