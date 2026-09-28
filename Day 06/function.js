// function declaration
// function myFunction() {
//   console.log("Hello from function");
// }

// function calling
// myFunction();
// myFunction();
// myFunction();
// myFunction();

// using function in buttons

/*
function greetUser() {
  //  every HTML tag is itself is an object in javascript
  // object has the diffrent properties and behaviour
  // textbox has the property called value which gives the value inserted in textbox

  // username is a id of the textbox
  let user = username.value;

  alert("Welcome " + user + " !");
}
  */

// console.log("hello");

// sum of two number
/*
    1. read the input from the HTML textbox
    2. on click of the button perform the addition operation
    3. display the result on the webpage

*/

// function addition() {
//   let a = first.value;
//   let b = second.value;
//   let c = Number(a) + Number(b);
//   out.innerText = c;
// }

// functions as values

// functions are the objects when we store a function in another variable then the reference will stored
// when we copy a function from one variable to another then the reference will copied

function addition() {
  let a = 10;
  let b = 20;

  return function getAddition() {
    return a + b;
  };
}

//  getAddition
let add = addition();
console.log(add());

// types of function / Global execution context , function execution context
