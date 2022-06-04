#!/usr/bin/node
function safePrintList(myArray=[], x=0) {
    if (!(myArray[Symbol.iterator])) {
        return 0
    }
    try {
        if (x >= myArray.length) {
            throw "Index out of range"
        }
        for (let i = 0; i <= x; i++) {
            process.stdout.write(`${myArray[i]}`)
        }
        console.log()
    } catch (e) {
        console.log(e)
    }
}

let  array = [1, 2, 3, 4, 5];

safePrintList(array, 4)