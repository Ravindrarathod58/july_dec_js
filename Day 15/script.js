const studentTable = document.getElementById("studentlist");
const studentForm = document.getElementById("studentForm");
const updateForm = document.getElementById("updateForm");
const deleteModal = document.getElementById("deleteModal");
const javaCount = document.getElementById("javaCount");
const pyCount = document.getElementById("pythonCount");
// Top level function must be async
let allStudents = null;
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
  allStudents = data;
}

function displayStudents(data = []) {
  //   console.log(data);

  studentTable.innerHTML = `
    <tr>
        <th> Student Id </th>
        <th> Student Name </th>
        <th> Student Email </th>
        <th> Student Course </th>
        <th> Action </th>
    </tr>
  `;

  data.forEach((student, index) => {
    studentTable.innerHTML += `
        <tr>
            <td> ${index + 1} </td>
            <td> ${student.student_name} </td>
            <td> ${student.email} </td>
            <td> ${student.course} </td>
            <td> <button onclick='show(${student.student_id})'> edit </button> <button onclick='showModal(${student.student_id})'> delete </button> </td>
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

  javaCount.innerText =
    "Java : " +
    data.filter((student) => student.course.toLowerCase() == "java").length;
  pyCount.innerText =
    "Python : " +
    data.filter((student) => student.course.toLowerCase() == "python").length;
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
      getStudents();
    })
    .catch((e) => {
      console.log(e);
    });
}

studentForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("s_name").value;
  const email = document.getElementById("s_email").value;
  const course = document.getElementById("s_course").value;

  const student = {
    student_name: name,
    email: email,
    course: course,
  };

  saveStudent(student);
});

getStudents();

function close() {
  updateForm.style.display = "none";
}
function show(id) {
  updateForm.style.display = "flex";

  const filteredStudent = allStudents.filter(
    (student) => student.student_id === id,
  )[0];

  document.getElementById("s_name_u").value = filteredStudent.student_name;
  document.getElementById("s_email_u").value = filteredStudent.email;
  document.getElementById("s_course_u").value = filteredStudent.course;
  document.getElementById("student_id").value = filteredStudent.student_id;
}

function updateStudent(student, id) {
  fetch("http://localhost:8080/api/update/" + id, {
    method: "post",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(student),
  })
    .then((res) => {
      if (!res.ok) {
        console.log("Failed to update Student");
      }
      return res.json();
    })
    .then((data) => {
      console.log("student updated");
      getStudents();
    })
    .catch((e) => {
      console.log(e);
    });
}

updateForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("s_name_u").value;
  const email = document.getElementById("s_email_u").value;
  const course = document.getElementById("s_course_u").value;
  const id = document.getElementById("student_id").value;
  const student = {
    student_name: name,
    email: email,
    course: course,
  };

  updateStudent(student, id);
  updateForm.style.display = "none";
});

function showModal(id) {
  deleteModal.style.display = "flex";
  document.getElementById("del_id").value = id;
}

function closeModal() {
  deleteModal.style.display = "none";
}

async function deleteStudent() {
  const id = document.getElementById("del_id").value;
  const res = await fetch("http://localhost:8080/api/delete/" + id, {
    method: "delete",
  });
  const data = await res.json();
  alert(data.Message);
  getStudents();
  closeModal();
}

function searchStudent() {
  const searchQuery = document.getElementById("searchQuery").value;
  console.log(searchQuery);
  const studentObj = allStudents.filter(
    (student) =>
      student.student_name.toLowerCase() == searchQuery.toLowerCase(),
  );

  displayStudents(studentObj);
}

// Javascript Ended

// 2026-10-23T10:05:09.297+05:30[0;39m [33m WARN[0;39m [35m28432[0;39m [2m--- [TestApplication] [nio-8080-exec-2] [0;39m[36m.w.s.m.s.DefaultHandlerExceptionResolver[0;39m [2m:[0;39m Resolved [org.springframework.http.converter.HttpMessageNotReadableException: JSON parse error: Cannot deserialize value of type `java.lang.String` from Object value (token `JsonToken.START_OBJECT`)]
