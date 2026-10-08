/*
    Objects is javascript

    Object is collection of Key and value pairs 
    identifier for the value
    key : value
    Properties

    1. Object literal
        {}

        const obj = {
            name : "Ravindra",
            age : 10
        }

    2. object constructor
        new Object();

        const obj = new Object(); // empty object

    3. Constructor function
        function Constructor(){
        }
        const obj = new Constructor();


    
    // How to assign the values in the object
        1. const obj = {
                name : "ravindra"
        }

        2. const obj = {};
        obj.propertyName = value;
        obj.name = "ravindra"

    // how to get the values from the object

             const obj = {
                name : "ravindra"
        }

      const name =   obj.propertyName;

      property reference
      const name = obj.name;

      bracket notation
      when using for in... loop on the objects
      the in keyword return the key from the object
      obj[name]


      // how to delete the property from the object?
        using the delete opertor

    
    Object Methods
    1. user defined
        as property we can add the methods inside the objects

        function are independent block of code
        methods belongs class or object

    2. predefined
        allows to perform some operations on the objects

        Object.keys(); // returns the keys present in object in form of array
        Object.values(); //returns the values present in object in form of array
        Object.freez() ; // freezes the object and not allows to add the new properties
        Object.isFrozen(); // returns true if the object frozen
        Object.seal();// 
        Object.isSealed()



    JSON
        Javascript object Notation
        it is Universal data structure
        To share the data between diffrent languages 

        it is collection of javascript array and objects 

        JSON methods
            1. JSON.parse()
                    -> Converts the string into JSON object

            2. JSON.stringify()
                    -> converts the json into strings

            
    const obj = {
        name : "ravi"
    }

    str = "ravi"

    String.valueOf(obj) // 



    fetch(URL).then(res=> res.json()).then(data => )

ex


Java
    Objects
Python
    Objects
Javascript
    Objects
*/

// Create a student object and add the properties like name, age and course
// create two object one using literal and second using constructor

// const student1 = {
//   name: "ravi",
//   age: 23,
//   course: "Java",
// };

// const student2 = new Object();
// student2.name = "Rohit";
// student2.age = 20;
// student2.course = "python";

// Print all the details of the student from the object

// console.log("Name of student 1 " + student1.name);
// console.log("age of student 1 " + student1.age);
// console.log("course of student 1 " + student1.course);
// console.log("Name of student 2 " + student2.name);
// console.log("age of student 2 " + student2.age);
// console.log("course of student 2 " + student2.course);

// for (let key in student1) {
//   console.log(key + " : " + student1[key]);
// }

// realme -> model mobile details

// product list , details add
// Array of Objects
// const obj = {
//   productName: "Realme",
//   price: 20000,
//   description: "sfdsfdsf",
//   image: "URL",
// };

// const productList = [
//   {
//     productName: "Realme",
//     price: 20000,
//     description: "sfdsfdsf",
//     image: "URL",
//   },
//   {
//     productName: "Samsung",
//     price: 30000,
//     description: "sfdsfdsf",
//     image: "URL",
//   },
//   {
//     productName: "Vivo",
//     price: 25000,
//     description: "sfdsfdsf",
//     image: "URL",
//   },
//   {
//     productName: "Oppo",
//     price: 26000,
//     description: "sfdsfdsf",
//     image: "URL",
//   },
// ];

// Filters -> price low to high , high to low, categories,

// const products = productList.filter((product) => product.price > 25000);
// console.log(products);

// const student1 = {
//   name: "ravi",
//   age: 23,
//   course: "Java",
// };

// console.log(student1);
// delete student1.course;
// console.log(student1);

// console.log("fees" in student1);

// const student1 = {
//   name: "ravi",
//   age: 23,
//   course: "Java",
//   // User defined method
//   getName: function () {
//     return this.name;
//   },
// };

// console.log(Object.keys(student1));
// console.log(Object.values(student1));
// console.log(student1);
// Object.freeze(student1);
// Object.seal(student1);
// console.log(Object.isFrozen(student1));
// student1.fees = "Python";

// console.log(student1);

//Object; // interface

//parseInt(); // function
//Number.parseInt(); // method
// let n = 10;
// let str = n.toString();

// const json = [
//   {
//     name: "Ravi",
//   },
// ];

// const str = JSON.stringify(json);
// console.log(JSON.parse(str));
