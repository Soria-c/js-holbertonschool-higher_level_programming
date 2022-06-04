#!/usr/bin/node

function bestScore(obj) {
  let max = Object.values(obj).sort().reverse()[0]
  return Object.keys(obj).filter((x) => obj[x] == max)[0]
} 

const objc = {
  'John': 12,
  'Bob': 14,
  'Mike': 14,
  'Molly': 16,
  'Adam': 10
};

console.log(`Best score: ${bestScore(objc)}`)
