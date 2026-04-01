const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const L = Number(input[0]);
const str = input[1];

const M = 1234567891n;
const r = 31n;
let result = 0n;
let rPower = 1n;

for (let i = 0; i < L; i++) {
  const charValue = BigInt(str[i].charCodeAt() - 96);

  result = (result + charValue * rPower) % M;

  rPower = (rPower * r) % M;
}

console.log(result.toString());