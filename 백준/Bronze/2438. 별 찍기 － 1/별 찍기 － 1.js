const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const n = Number(input);

for (let i = 0; i < n; i++) {
  console.log("*".repeat(i + 1));
}
