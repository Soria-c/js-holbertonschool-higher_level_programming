#!/usr/bin/node

function searchReplace(array, search, replace) {
  return array.map((x, y) => array[y] == search? replace: x)
} 

let m = [1, 2, 3, 4, 5, 4, 2, 1, 1, 4, 89];
console.log(searchReplace(m, 2, 89))
console.log(m)
