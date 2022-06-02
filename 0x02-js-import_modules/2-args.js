#!/usr/bin/node
let arg = process.argv;
if (arg.length == 2) {
    console.log("0 arguments.")
} else if (arg.length == 3) {
    console.log(`1 argument:\n1: ${arg[2]}`)
} else {
    console.log(`${arg.length - 2} arguments:`)
    for (let i = 1; ++i < arg.length;) {
        console.log(`${i - 1}: ${arg[i]}`)
    }
}
