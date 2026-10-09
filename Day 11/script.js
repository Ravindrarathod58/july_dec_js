/*
    OOP using JS
        it is programming methodology used to design the programs with the help
        of class and object

    what is class?
        class is logical entity which holds the properties and behaviours for the objects
        
    what is object?
        object is instance of the class

    4 pillars 
        1. encapsulation
        2. Polymorphism
        3. Inheritace
        4. Abstraction
    

    class
        How to create a class?
            using class keyword

        properties 
            properties are the variables declared inside the class

            Variables 
                variable is named memory location which holds the data that can changed / modified
                1. Instance variable (non static variable)
                    Instance variables are dclared inside the class outside the methods 
                    we can only use the instance variable when the object is created
                2. static variable
                    static variables are declared using static keyword it can be directly accessed
                    using the className without creating object

        Behaviour
            behaviours can be defined with methods 
            methods are the block of code / statement that can executed repeatedly
            1. Non static
                we can only call the non static methods with object reference 
            2. static
                static methods belong to the class and we can directly call them using className

        How to create the object of the class?
            using new keyword and the constructor

        what is new keyword?
            new kayword dynamically allocates the memory for the objects
        what is constructor?
            it is a special type of method which automatically gets called when the object created
            a class can have only one constructor
            either it can be implicit or explicit
            1. default constructor
                when there is no constructor added by the developer then the interpreter automatically adds the constructor
            2. user defined cconstructor
                if we add the constructor manually inside class the default constructor will be not added 
                we can add only one constructor in the class it can be prameterized or non parametrized

        Access modifiers
            2 types 
                - Public
                    - can be accessed from anywhere 
                    - if we not add any modifier for the variables or the methods then by default they are public 
                - private
                    - the private variables or methods can be accessed within the same class
                    - the private variables or method can be declared using # 

            arguments -> collect

            class A{

            // constructor
            constructor(){
            
            }

    
            
            }
            const obj = new A();

        what is this?
            this represents the current object

    EX. WAP using class and Objects to perform the Mathmatical operations
    properties
        PI -> static variable 
    
    methods
        pow(n , e) -> returns the power of the number 
        max(...n)  -> returns the max number form the given
        min(...n) -> returns the minimum from given number
        abs(n) -> returns the absolute value
        ceil(n) -> returns the  upper value from the decimal (10.1 -> 11)
        floor() -> returns the base value from the decimal
        round() -> returns the rounded value 10.5 -> 11 10.4 -> 10
        sum(...n) -> returns the sum of all values



    ex 
        create the student class and implement the following properties and methods
        - name , rollNo, grade

        -> create te method which calculates the students grade
        -> create the diplay info method which prints the students details




    Data hiding 
        data hiding is process of delaring the class varibles or methods private so it must not be accessible
        outside the class

*/

/*
class MyClass {
  //   name;
  constructor() {
    this.name = "Ravindra";
    console.log("hello from constructor ");
  }

  //non static method
  sayHello() {
    console.log("Hello from non static method" + this.name);
  }

  static sayGoodBy() {
    console.log("Good by from the static method");
  }
}

// create the object
const myclass = new MyClass();
myclass.sayHello(); // calling non static method

MyClass.sayGoodBy();
*/

/*
class Math {
  static PI = 3.14159;

  static pow(n, ex) {
    let temp = 1;
    let p = 1;
    while (temp <= ex) {
      p = n * n;
      temp++;
    }
    return p;
  }

  static max(...n) {
    let max = 0;
    for (let el of n) {
      if (el > max) {
        max = el;
      }
    }
    return max;
  }

  static min(...n) {
    let min = Infinity;
    for (let el of n) {
      if (el < min) {
        min = el;
      }
    }
    return min;
  }

  static abs(n) {
    return n * -1;
  }

  static ceil(n) {
    return parseInt(n) + 1;
  }

  static floor(n) {
    return parseInt(n);
  }

  static round(n) {
    n = n.toFixed(1);
    let last = parseInt(String(n).split(".")[1]);
    if (last > 5) {
      return parseInt(n) + 1;
    }
    return parseInt(n);
  }

  static sum(...n) {
    let s = 0;
    for (let el of n) {
      s += el;
    }
    return s;
  }
}

console.log(Math.pow(10, 2));
console.log(Math.max(10, 2, 40));
console.log(Math.min(10, 2, 40));
console.log(Math.abs(-5));
console.log(Math.ceil(10.1));
console.log(Math.floor(10.1));
console.log(Math.round(10.6));
console.log(Math.sum(10.6, 11, 20, 30));



class Student {
  #name;
  #roll_no;
  #grade;

  constructor(name, roll_no) {
    this.#name = name;
    this.#roll_no = roll_no;
  }

  // 90 -> A , 70 -> B , 50 -> C else fail
  calculateGrade(marks) {
    if (marks >= 90) {
      this.#grade = "A";
    } else if (marks >= 70) {
      this.#grade = "B";
    } else if (marks >= 50) {
      this.#grade = "C";
    } else {
      this.#grade = "Failed";
    }
  }

  displayInfo() {
    console.log(
      "Name " +
        this.#name +
        " \n roll_no " +
        this.#roll_no +
        " \n Grade " +
        this.#grade,
    );
  }
}

const obj = new Student("Ravindra", "1");
obj.calculateGrade(50);
obj.displayInfo();
console.log(obj.name);

*/
