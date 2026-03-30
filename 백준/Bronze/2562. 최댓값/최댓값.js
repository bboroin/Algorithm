const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let max = 0;
let idx = 0;

for (let i = 0; i < 9; i++) {
  const num = Number(input[i]);
  if (max < num) {
    max = num;
    idx = i + 1;
  }
}

console.log(max);
console.log(idx);
