// console.log("which type of vehicle you have");
let typeofVehicle = parseInt(prompt("which type of vehicle you have"));
if (typeofVehicle >= 2 && typeofVehicle <= 4) {
  let age = parseInt(prompt("what is the age of the vehicle?"));
  if (age > 8) {
    let option = parseInt(
      prompt(
        "Select and option \n 1) Tyre problem \n 2) Fuel problem \n 3) engine issue \n 4) general service",
      ),
    );

    if (option >= 1 && option <= 4) {
      if (option === 1) {
        let issue = "Tyre problem";
        let userName = prompt("Please Enter your Name");
        let vehicleName = prompt("Please Enter your vehicle name");
        let noOfTyres = parseInt(
          prompt("How many tyres are facing the issue?"),
        );

        let isValid = false;

        if (typeofVehicle === 2 && noOfTyres <= 2) {
          isValid = true;

          alert(
            `Name : ${userName} \n Vehicle Name : ${vehicleName} \n Issue : ${issue} \n Bill : ${noOfTyres * 400}`,
          );
        }

        if (typeofVehicle === 3 && noOfTyres <= 3) {
          isValid = true;

          alert(
            `Name : ${userName} \n Vehicle Name : ${vehicleName} \n Issue : ${issue} \n Bill : ${noOfTyres * 400}`,
          );
        }

        if (typeofVehicle === 4 && noOfTyres <= 4) {
          isValid = true;

          alert(
            `Name : ${userName} \n Vehicle Name : ${vehicleName} \n Issue : ${issue} \n Bill : ${noOfTyres * 400}`,
          );
        }

        if (!isValid) {
          alert("Please select valid number of of tyres");
        }
      } else if (option === 2) {
        let issue = "Fuel problem";
        let userName = prompt("enter you name");
        let vehicleName = prompt("Please Enter your vehicle name");
        let bill = 1500;

        alert(
          `Name : ${userName} \n Vehicle name : ${vehicleName} \n Issue : ${issue} \n Bill : ${bill}`,
        );
      } else if (option === 3) {
        let issue = "Engine problem";
        let userName = prompt("enter you name");
        let vehicleName = prompt("Please Enter your vehicle name");
        let bill = 5000;

        alert(
          `Name : ${userName} \n Vehicle name : ${vehicleName} \n Issue : ${issue} \n Bill : ${bill}`,
        );
      } else if (option === 4) {
        let issue = "General Service";
        let userName = prompt("enter you name");
        let vehicleName = prompt("Please Enter your vehicle name");
        let bill = 1000;

        alert(
          `Name : ${userName} \n Vehicle name : ${vehicleName} \n Issue : ${issue} \n Bill : ${bill}`,
        );
      }
    } else {
      alert("Sorry we are not providing selected service");
    }
  } else {
    alert("your vehicle servie will done after a while");
  }
} else {
  alert(
    "this service center is not accepting other than 2 wheeler, 3 wheeler and 4 wheeler",
  );
}
