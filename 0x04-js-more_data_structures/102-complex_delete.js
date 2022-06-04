#!/usr/bin/node

function complexDelete(obj, value) {
    for (i in obj) {
        if (obj[i] == value) {
            delete obj[i]
        }
    }
    return obj
} 

const m = {'lang': "C", 'track': "Low", 'pref': "C", 'ids': [1, 2, 3]}

console.log(complexDelete(m, "C"))
console.log(m)
