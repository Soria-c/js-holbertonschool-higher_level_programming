#!/usr/bin/node

function printListInteger(myArray = []) {
    for (i of myArray) {
        console.log(i);
    }
}

let array = [1, 2, 3, 4, 5];
printListInteger(array)
