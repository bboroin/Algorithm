const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

for (let i = 0; i < input.length; i++) {
  const str = input[i];

  if (str === "0") break;
  const reversed = str.split("").reverse().join("");

  if (str === reversed) {
    console.log("yes");
  } else {
    console.log("no");
  }
}