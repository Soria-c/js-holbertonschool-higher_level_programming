#!/usr/bin/node
let word = "Holberton";
let word_first_3 = word.slice(0, 3)
let word_last_2 = word.slice(-2)
let middle_word = word.slice(1, -1)
console.log(`First 3 letters: ${word_first_3}`)
console.log(`Last 2 letters: ${word_last_2}`)
console.log(`Middle word: ${middle_word}`)
