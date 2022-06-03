#!/usr/bin/node

function commonElements(set1, set2) {
  return new Set(Array.from(set1).filter(x => set2.has(x)))
} 


const a = new Set(["Python", "C", "Javascript"]);
const b = new Set(["Bash", "C", "Ruby", "Perl"]);
console.log(commonElements(a, b))
