const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const [a, b] = input.split(" ").map(Number);

if (a > b) {
  console.log(">");
} else if (a < b) {
  console.log("<");
} else {
  console.log("==");
}
