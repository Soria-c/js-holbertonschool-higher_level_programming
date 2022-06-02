#!/usr/bin/node
import add from "./add_0.js";
import { fileURLToPath } from "url";

function main() {
  console.log(`1 + 2 = ${add(1, 2)}`)
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  main();
}