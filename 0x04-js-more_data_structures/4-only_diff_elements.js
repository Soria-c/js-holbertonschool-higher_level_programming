#!/usr/bin/node

function onlyDiffElements(set1, set2) {
  let dif1 = Array.from(set1).filter((x) => !set2.has(x));
  let dif2 = Array.from(set2).filter((x) => !set1.has(x))
  return new Set([...dif1, ...dif2])
} 


const a = new Set(["Python", "C", "Javascript"]);
const b = new Set(["Bash", "C", "Ruby", "Perl"]);
console.log(onlyDiffElements(a, b))
