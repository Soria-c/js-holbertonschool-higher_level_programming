#!/usr/bin/node

function multiplReturns(text) {
  return [text.length, text[0]]
}

[length, first] = multiplReturns("At school, I learnt C!")
console.log(`Length: ${length} - First Character: ${first}`)