/*

Ex 1.

Write a program to print Fibonacci series up to n terms.

 Input :
	Enter a number : 5
Expected Output :
0 1 1 2 3 

*/
/*
let n = parseInt(prompt("Enter the number"));
let output = "";
let a = 0;
let b = 1;
let c = 0;
output += a + " " + b + " ";
for (let i = 3; i <= n; i++) {
  c = a + b;
  a = b;
  b = c;
  output += c + " ";
}
console.log(output);

*/

/*
Write a  program to given pattern.

        *       
      * * *    
    * * * * *   
  * * * * * * *    
* * * * * * * * *  
  * * * * * * *  
    * * * * *    
      * * *     
        *  



let str = "";
let row = 9;
let cols = 9;
let start = parseInt(cols / 2 + 1);
let end = parseInt(cols / 2 + 1);
for (let i = 1; i <= row; i++) {
  for (let j = 1; j <= cols; j++) {
    if (j >= start && j <= end) {
      str += " * ";
    } else {
      str += "   ";
    }
  }

  if (i <= row / 2) {
    start--;
    end++;
  } else {
    start++;
    end--;
  }

  str += "\n";
}

console.log(str);

*/
