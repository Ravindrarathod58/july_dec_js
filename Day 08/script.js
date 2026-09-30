/*
function addition(a = 0, b = 0) {
  console.log(a + b);
}
addition(10, 20);

*/

/*
    WAF to find the maximum number

*/

/*
// Math.max();
function max(...n) {
  // [10,20]
  let max = 0;
  for (let i of n) {
    if (i > max) {
      max = i;
    }
  }
  return max;
}

console.log(max(10, 20, 20, 40, 5, 24, 45, 24));

*/

/*
function addition(a = 0, b = 0) {
  let sum = parseInt(a) + parseInt(b);
  //   console.log(sum);
  out.innerText = sum;
}

*/

/*

    10 -> even , odd

*/

// function isEven(a) {
//   if (a % 2 == 0) {
//     console.log("even");
//   } else {
//     console.log(odd);
//   }
// }

// const isEven = (a) => a % 2 === 0;

// if (isEven(10)) {
//   console.log("Even");
// } else {
//   console.log("odd");
// }

/*
    Students
    
    1. id , name, course, fees

    methods
        getter setter

    addStudent
        -> returns the new object 
    
*/
/*
function Student(id, name, course, fees) {
  this.name = name;
  this.id = id;
  this.course = course;
  this.fees = fees;

  this.getId = () => this.id;
  this.getName = () => this.name;
  this.getCourse = () => this.course;
  this.getFees = () => this.fees;

  this.setId = (id) => {
    this.id = id;
  };
  this.setName = (name) => {
    this.name = name;
  };
  this.setCourse = (course) => {
    this.course = course;
  };
  this.setFees = (fees) => {
    this.fees = fees;
  };

  this.addStudent = (id, name, course, fees) =>
    new Student(id, name, course, fees);
}

const student = new Student();

const student1 = student.addStudent(101, "Ravindra", "Java", 12345);
console.log(student.getName());
*/
