#!/usr/bin/node
import {add, sub, mul, div} from "./calculator_1.js";
import { fileURLToPath } from "url";

function main() {
  let f = {
    "+": add,
    "-": sub,
    "*": mul,
    "/": div
  };
  let a = 10;
  let b = 5;

  for (let k in f) {
    console.log(`${k} ${f[k](a, b)}`)
  }
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  main();
}