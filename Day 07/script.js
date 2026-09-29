//anonymous function
// we can store the anonymous functions in variable

// const fn = function () {};

// fn();

// const fn = () => {};

// let name = "Javasscript";

// HOF
// function myFunction() {
//   let count = 0;

//   console.log(name);

//   //closure
//   return () => {
//     return count++;
//   };
// }

// const fn = myFunction();

// console.log(fn());
// console.log(fn());
// console.log(fn());

// myFunction();

/*
    global execution context
    function execution context
*/

// (function () {
//   console.log("Hello Javascrip");
// })();

// let n = prompt();
// let n = window.prompt();

// function myFunction(this) {

//     return; // delete the stack frame
// }

//Constructor function

// function Student(name, course) {
//   this.name = name;
//   this.course = course;

//   this.getName = function () {
//     return this.name;
//   };
//   this.setName = function (name) {
//     this.name = name;
//   };

//   this.getCourse = function () {
//     return this.course;
//   };
//   this.setCourse = function (course) {
//     this.course = course;
//   };
// }

// ravindra java

// const student1 = new Student("Ravindra", "Java");
// console.log(student1.getCourse());

// const student2 = new Student("Ravindra", "JavaScript");
// console.log(student2.getCourse());

// function findEven(callback, ...n) {
//   for (let el of n) {
//     if (callback) {
//       console.log(el);
//     }
//   }
// }

// const isEven = (n) => n % 2 === 0;

// findEven(isEven, 10, 20, 30, 40, 50, 13, 4, 5, 6, 7, 3, 2);

// class Hello {
//   msg;

//   getMsg() {
//     return this.msg;
//   }
// }
