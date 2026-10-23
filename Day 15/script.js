const studentTable = document.getElementById("studentlist");
const studentForm = document.getElementById("studentForm");
// Top level function must be async

async function getStudents() {
  // using promises
  //   fetch(`http://localhost:8080/api/students`, { method: "get" })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       displayStudents(data);
  //     });
  // using async await
  const response = await fetch("http://localhost:8080/api/students");
  const data = await response.json();
  displayStudents(data);
}

function displayStudents(data = []) {
  //   console.log(data);

  studentTable.innerHTML = `
    <tr>
        <th> Student Id </th>
        <th> Student Name </th>
        <th> Student Email </th>
        <th> Student Course </th>
    </tr>
  `;

  data.forEach((student) => {
    studentTable.innerHTML += `
        <tr>
            <td> ${student.student_id} </td>
            <td> ${student.student_name} </td>
            <td> ${student.email} </td>
            <td> ${student.course} </td>
        </tr>
    `;

    // const tr = document.createElement("tr");
    // const td1 = document.createElement("td");
    // td1.innerText = student.student_id;
    // const td2 = document.createElement("td");
    // td2.innerText = student.student_name;
    // const td3 = document.createElement("td");
    // td3.innerText = student.email;
    // const td4 = document.createElement("td");
    // td4.innerText = student.course;

    // tr.append(td1, td2, td3, td4);
    // studentTable.appendChild(tr);
  });
}

/*
    text/html
    application/json
    xxx-form-urlencoded

*/

function saveStudent(student = {}) {
  fetch("http://localhost:8080/api/add", {
    method: "post",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(student),
  })
    .then((res) => {
      if (!res.ok) {
        console.log("Failed to add Student");
      }
      return res.json();
    })
    .then((data) => {
      console.log("student added");
    })
    .catch((e) => {
      console.log(e);
    });
}

studentForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("s_name");
  const email = document.getElementById("s_email");
  const course = document.getElementById("s_course");

  const student = {
    student_name: name,
    email: email,
    course: course,
  };

  saveStudent(student);
});

getStudents();
