// Task no 1
var city = prompt("Enter your city name:");
if (city.toLowerCase() === "karachi") {
  alert("Welcome to city of lights");
}

// Task no 2
var gender = prompt("Enter your gender :");
if (gender.toLowerCase() === "male") {
  alert("Good Morning Sir.");
} else if (gender.toLowerCase() === "female") {
  alert("Good Morning Ma’am.");
} else {
  alert("Good Morning!");
}

// Task no 3
var signalColor = prompt("Enter the traffic signal color (Red, Yellow, Green):");
signalColor = signalColor.toLowerCase();

if (signalColor === "red") {
  alert("Must Stop");
} else if (signalColor === "yellow") {
  alert("Ready to move");
} else if (signalColor === "green") {
  alert("Move now");
} else {
  alert("Invalid signal color!");
}

// Task no 4
var fuel = parseFloat(prompt("Enter remaining fuel in litres:"));
if (fuel < 0.25) {
  alert("Please refill the fuel in your car");
}


// Task no 5
// a.
var a = 4;
if (++a === 5) {
  alert("given condition for variable a is true");
}

// b.
var b = 82;
if (b++ === 83) {
  alert("given condition for variable b is true");
}

// c.
var c = 12;
if (c++ === 13) {
  alert("condition 1 is true");
}
if (c === 13) {
  alert("condition 2 is true");
}
if (++c < 14) {
  alert("condition 3 is true");
}
if (c === 14) {
  alert("condition 4 is true");
}

// d.
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
  alert("The cost equals");
}

// e.
if (true) {
  alert("True");
}
if (false) {
  alert("False");  
}

// f.
if ("car" < "cat") {
  alert("car is smaller than cat");
}

// Task no 6
 var subject1 = +prompt("Enter marks obtained in Subject 1:");
    var subject2 = +prompt("Enter marks obtained in Subject 2:");
    var subject3 = +prompt("Enter marks obtained in Subject 3:");
    var totalMarks = +prompt("Enter total marks:");

    // Calculate
    var obtainedMarks = subject1 + subject2 + subject3;
    var percentage = (obtainedMarks / totalMarks) * 100;
    var grade = "";
    var remarks = "";

    // Grade and remarks logic
    if (percentage >= 80) {
      grade = "A-one";
      remarks = "Excellent";
    } else if (percentage >= 70) {
      grade = "A";
      remarks = "Good";
    } else if (percentage >= 60) {
      grade = "B";
      remarks = "You need to improve";
    } else {
      grade = "Fail";
      remarks = "Sorry";
    }

    // Display the result on page
    document.write("<b>Total Marks:</b> " + totalMarks + "<br>");
    document.write("<b>Marks Obtained:</b> " + obtainedMarks + "<br>");
    document.write("<b>Percentage:</b> " + percentage.toFixed(2) + "%<br>");
    document.write("<b>Grade:</b> " + grade + "<br>");
    document.write("<b>Remarks:</b> " + remarks + "<br>");

// Task no 7
var secretNumber = 7;
var guess = +prompt("Guess the secret number (1 to 10):");

if (guess === secretNumber) {
  alert("Bingo! Correct answer");
} else if (guess + 1 === secretNumber || guess - 1 === secretNumber) {
  alert("Close enough to the correct answer");
} else {
  alert("Try again!");
}

// Task no 8
var num = +prompt("Enter a number to check if it's divisible by 3:");

if (num / 3 === 0) {
  alert(num + " is divisible by 3.");
} else {
  alert(num + " is not divisible by 3.");
}

// Task no 9
var number = +prompt("Enter a number:");

if (number % 2 === 0) {
  alert("The number is even.");
} else {
  alert("The number is odd.");
}

// Task no 10
var temp = +prompt("Enter the temperature:");

if (temp > 40) {
  alert("It is too hot outside.");
} else if (temp > 30) {
  alert("The Weather today is Normal.");
} else if (temp > 20) {
  alert("Today’s Weather is cool.");
} else if (temp > 10) {
  alert("OMG! Today’s weather is so Cool.");
} else {
  alert("It's very cold!");
}

// Task no 11
var num1 = +prompt("Enter first number:");
var num2 = +prompt("Enter second number:");
var operation = prompt("Enter operation:");
var result;

if (operation === "+") {
  result = num1 + num2;
} else if (operation === "-") {
  result = num1 - num2;
} else if (operation === "*") {
  result = num1 * num2;
} else if (operation === "/") {
  result = num1 / num2;
} else if (operation === "%") {
  result = num1 % num2;
} else {
  result = "Invalid operation";
}

alert("Result: " + result);
