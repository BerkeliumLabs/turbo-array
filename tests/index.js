import assert from "assert";
import { add, testArray } from "../build/debug.js";
assert.strictEqual(add(1, 2), 3);
console.log("ok");

const data = Array.from({ length: 1000000 }, (_, i) => i);

console.time("testArray");
const a = testArray(data);
console.log(a);
console.timeEnd("testArray");

console.time("default");
const b = data.map((x) => x + 1);
console.log(b);
console.timeEnd("default");
