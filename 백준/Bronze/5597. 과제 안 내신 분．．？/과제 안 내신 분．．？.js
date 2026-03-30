const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const arr = Array(31).fill(false);

for (let i = 0; i < 28; i++) {
  arr[Number(input[i])] = true;
}

for (let j = 1; j <= 30; j++) {
  if (!arr[j]) {
    console.log(j);
  }
}
