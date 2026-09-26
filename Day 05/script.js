/*


Title: Interactive Tea Stall Experience



Introduction:

Imagine strolling down a charming street, 
enticed by the inviting aroma of freshly brewed beverages.

You arrive at a cozy tea stall, greeted by a 
friendly attendant. Prepare for an interactive 
journey through the Tea Stall Counter!
Scenario:
Welcome and Menu:

You enter the tea stall, warmly welcomed by the attendant:
Attendant: "Welcome to our Tea Stall Counter! Our menu:"



Tea --------------------- Rs. 10

Coffee ------------------ Rs. 20

Cold coffee ------------- Rs. 50

Exit

Attendant: "Choose by entering a number (1-4):"



[User enters choice]



Customize Order:

Based on your choice, the attendant guides you:



[If choice is 1:]

Attendant: "How many cups of refreshing tea?"



[If choice is 2:]

Attendant: "How many cups of aromatic coffee?"



[If choice is 3:]

Attendant: "How many cups of chilled cold coffee?"



[User enters quantity]

Total and Payment:

The attendant shares your order total and awaits payment:



Attendant: "Total for [quantity] cup(s): Rs. [total_price]."



Attendant: "Enter your payment amount: Rs."



[User enters amount_paid]



Attendant: "Change: Rs. [change]."



Continuation or Farewell:

Choose to explore more or conclude your visit:



Attendant: "Explore more or finalize? (Type 'Y' for Yes or 'N' for No):"



[User enters order_again]



[If user wants to continue:]

Attendant: "Certainly, let's explore."



[If user doesn't want to continue:]

Attendant: "Thank you for visiting! We look forward to serving you again soon!"



*/

let choice = parseInt(
  prompt(
    "Welcome to our Tea Stall Counter! Our menu: \n Tea --------------------- Rs. 10 \n Coffee ------------------ Rs. 20 \n Cold coffee ------------- Rs. 50 \n Exit \n Choose by entering a number (1-4): ",
  ),
);

if (choice === 1) {
  let quantity = parseInt(prompt("How many cups of refreshing tea?"));
  let bill = parseInt(
    prompt(
      `Total for ${quantity} cup(s): Rs. ${quantity * 10}. \n Enter your payment amount: Rs. ${quantity * 10}`,
    ),
  );

  if (bill > quantity * 10) {
    alert(`Change: Rs. ${bill - quantity * 10}. \n Thanks for visiting`);
    if (confirm("Do you want to explore?")) {
      location.reload(); // page reload
    } else {
      alert(
        "Thank you for visiting! We look forward to serving you again soon!",
      );
    }
  } else {
    alert("Thank you for visiting!");
    if (confirm("Do you want to explore?")) {
      location.reload(); // page reload
    } else {
      alert(
        "Thank you for visiting! We look forward to serving you again soon!",
      );
    }
  }
} else if (choice === 2) {
  let quantity = parseInt(prompt("How many cups of aromatic coffee?  "));
  let bill = parseInt(
    prompt(
      `Total for ${quantity} cup(s): Rs. ${quantity * 20}.\n Enter your payment amount: Rs. ${quantity * 10}`,
    ),
  );

  if (bill > quantity * 20) {
    alert(`Change: Rs. ${bill - quantity * 20}. Thanks for visiting`);
    if (confirm("Do you want to explore?")) {
      location.reload(); // page reload
    } else {
      alert(
        "Thank you for visiting! We look forward to serving you again soon!",
      );
    }
  } else {
    alert("Thank you for visiting!");
    if (confirm("Do you want to explore?")) {
      location.reload(); // page reload
    } else {
      alert(
        "Thank you for visiting! We look forward to serving you again soon!",
      );
    }
  }
} else if (choice === 3) {
  let quantity = parseInt(
    prompt(
      "How many cups of chilled cold coffee?  \n Enter your payment amount: Rs. ${quantity * 10}",
    ),
  );
  let bill = parseInt(
    prompt(
      `Total for ${quantity} cup(s): Rs. ${quantity * 50}.  \n Enter your payment amount: Rs. ${quantity * 10}`,
    ),
  );
  if (bill > quantity * 50) {
    alert(`Change: Rs. ${bill - quantity * 50}. Thanks for visiting`);
    if (confirm("Do you want to explore?")) {
      location.reload(); // page reload
    } else {
      alert(
        "Thank you for visiting! We look forward to serving you again soon!",
      );
    }
  } else {
    alert("Thank you for visiting!");
    if (confirm("Do you want to explore?")) {
      location.reload(); // page reload
    } else {
      alert(
        "Thank you for visiting! We look forward to serving you again soon!",
      );
    }
  }
} else if (choice === 4) {
  alert("Thanks for visiting");
} else {
  alert("Enter the valid choice");
  location.reload();
}
