const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const T = Number(input[0]);

for (let i = 1; i <= T; i++) {
  let str = input[i];
  let result = 0;
  let score = 0;
  for (let j = 0; j < str.length; j++) {
    if (str[j] === "O") {
      score++;
      result += score;
    } else {
      score = 0;
    }
  }
  console.log(result);
}
