/*
let n = parseInt(prompt()); // 89
let rev = 0; // 98
// 21
let temp = n;
while (temp != 0) {
  rev = rev * 10 + (temp % 10);
  temp = parseInt(temp / 10);
}

let sum = 0;

temp = rev; // 98
let count = 1;
while (temp != 0) {
  sum = sum + Math.pow(temp % 10, count); // 0 + 8 ^ 1 = 8; 8 + 9 ^ 2 = 89
  count++; // 2 3
  temp = parseInt(temp / 10); // 9 0
}

if (sum === n) {
  // 89 89
  console.log("Number is disarium number");
} else {
  console.log("Number is not a disarium number");
}
  */

/*
let n = 25; // 625
let square = n * n; // 625
let temp = n;
let count = 0; // 2
while (n != 0) {
  count++;
  n = parseInt(n / 10);
}
// 25 % 10 // 5      625 % 100 = 25
let digits = square % Math.pow(10, count); // 10 ^ 2 = 100
console.log(digits);
if (digits === temp) {
  console.log("Number is automorphic ");
} else {
  console.log("Number is not automorphic");
}
*/
