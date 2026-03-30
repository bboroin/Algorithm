const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const arr = Array(26).fill(-1);

for (let i = 0; i < input.length; i++) {
  const idx = input.charCodeAt(i) - "a".charCodeAt(0);

  if (arr[idx] === -1) {
    arr[idx] = i;
  }
}

console.log(arr.join(" "));
