/*

    1. Encapsulation
        Wrapping the data members with public methods in single unit

    data hiding
        using the private access modifier

        How to achive the encapsulation?
            1. declare the class level variables as private 
            2. write the getter method to get the values 
            3. write the setter methods to modify / update the values
    
        what is the getter method?
            - to read the values 

        what is the setter method?
            - to set / initialise the values for the instance variables


    2. Inheritance
        Aquiring the properties of the base class into derived class
        inheritance can be achived using extends keyword

    Types of inheritance
        1. Single level inheritance
            one base class can have one derived class

        2. Multi level inheritance
            a derived class can also act as base class

        3. hierarchical inheritance
            when one base class can have more than two derived class

        4. Multiple inheritance
            when one derived class can have more than two base classes
            it not possible in javascript
             when the child class super calls the parent constructor
            
        5. Hybrid Inheritance
            combination more than one inheritance

    2 types of relationship
        IS-A
            a derived inherits all the properties and behaviours
            using the extends keyword
        HAS-A
            when a class object is created during the constructor call or field



    

    write and program to encapsulate the student data
    name
    age course



    class A{
    
    }

    class B extends A{
    
    }

    class C extends B{
    }


    class D extends C{
    
    }

    class E {
        this.obj = new C();// field
        construtor(){
            this.obj = new C();
        }
    
    }



    constructor chaining?
        when we achive the inheritance in that case we need to call the parent class constructor
        using super() this creates the constructor chaining


    

    3. polymorphism
        1. compile time polymorphism 
            method overloading 
        2. runtime polymorphism 
            method overriding
            when the parent class and child class have the same method signature

    4. Abstraction
        Not possible in javascript
        there is no abstract keyword
        there is no support for interface
         but we can achive in Typescript -> strictly typed javascript 
*/

// class Student {
//   #name;
//   #age;
//   #course;
//   constructor(name, age, course) {
//     this.#name = name;
//     this.#age = age;
//     this.#course = course;
//   }

//   getName() {
//     return this.#name;
//   }

//   setName(name) {
//     this.#name = name;
//   }

//   getAge() {
//     return this.#age;
//   }
//   setAge(age) {
//     this.#age = age;
//   }

//   getCourse() {
//     return this.#course;
//   }
//   setCourse(course) {
//     this.#course = course;
//   }
// }
// class Student {
//   name;
//   age;
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }
// class StudentManagement extends Student {
//   constructor() {
//     super(); // constructor chaining
//   }
// }
// const obj = new StudentManagement();

// const obj = new StudentManagement("sfd", "d");
// console.log(obj.getName());

class A {
  sayHello() {
    console.log("Hello from base class");
  }
}

class B extends A {
  sayHello() {
    console.log("Hello from child class");
  }
}

const obj = new B();
obj.sayHello(); //
