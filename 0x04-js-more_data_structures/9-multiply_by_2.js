#!/usr/bin/node

function multiplyBy2(obj) {
  return Object.keys(obj).reduce((newObj, key) => {
    newObj[key] = obj[key] * 2
    return newObj
  }, {})
} 

const objc = {
  'John': 12, 
  'Alex': 8, 
  'Bob': 14, 
  'Mike': 14, 
  'Molly': 16
};

console.log(objc)
console.log(multiplyBy2(objc))
