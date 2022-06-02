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
  let arg = process.argv;
  let a;
  let b;

  if (!f[arg[3]]) {
    console.log("Unknown operator. Available operators: +, -, * and /")
    process.exit(1)
  }
  a = Number(arg[2]);
  b = Number(arg[4]);
  console.log(`${a} ${arg[3]} ${b} = ${f[arg[3]](a, b)}`)
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  if (process.argv.length != 5) {
    console.log("Usage: ./100-my_calculator.js <a> <operator> <b>")
    process.exit(1)
  }
  main();
}