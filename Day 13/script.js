import { productList } from "./data.js";

/* 
Modules & DOM in JS  


    modules are the separate js files used as import and export in the main files
    which promotes the code maintainability

we have to use the type = "module" in the script tag

we have to use the import and export keywords to use the function or objects 
in diffrent files

types of modules
1. default export
    using the default keyword we can export a single function or a single object from the module / file


2. named export
    using the {} (object) we can export multiple object or multiple functions from the module / file


Modules are mostly used to split the code in multiple files
Modules are used in React.js


*/
// import hello from "./file1.js"; // importing the module

// hello();

//import { hello, func2 } from "./file1.js"; // importing the named exports

// hello();
// func2();

/*
    DOM
        Document Object Modal

    document -> it is object which provides the methods to manipulate the elements

*/

// const p = document.getElementById("p");
// console.dir(p.innerText);
// console.dir(p.innerHTML);
// p.innerText = "New text added by JS";
// p.innerHTML = "<span> span is added </span>";
// console.log(p.innerHTML);

// const elements = document.getElementsByTagName("p");
// console.log(elements);

// const eleme = document.getElementsByClassName("p");

// console.log(eleme);

// const p = document.querySelectorAll(".p");
// console.log(p);

/*
function maths(op) {
  // read the values of the textboxes
  //   every input tag has the value attribute which treated as property in JS
  const num_1 = document.getElementById("num_1").value;
  const num_2 = document.getElementById("num_2").value;
  const result = document.getElementById("result");
  switch (op) {
    case "+":
      result.innerText = parseInt(num_1) + parseInt(num_2);
      break;

    case "-":
      result.innerText = parseInt(num_1) - parseInt(num_2);
      break;

    case "*":
      result.innerText = parseInt(num_1) * parseInt(num_2);
      break;
  }
}
  */

// const p = document.getElementById("p"); //
// p.style.color = "red";
// p.style.backgroundColor = "aqua";

// const newElem = document.createElement("h1");
// console.log(newElem);
// newElem.innerText = "H1 created by JS";

// const container = document.getElementById("container");
// console.log(document.body);
// container.append(newElem);

const container = document.getElementById("productContainer");
console.log(container);
productList.forEach((product) => {
  container.innerHTML += `

     <div class="productCard">
        <img
          src="${product.image}"
          alt=""
        />
        <p>${product.title}</p>
        <p>${product.price}</p>
      </div>

    `;

  console.log(container);
});

console.log(container);
