// Task no 1
var char = prompt("Enter a character:");

if (char.length === 1) {
  var code = char.charCodeAt(0);

  if (code >= 48 && code <= 57) {
    alert("It's a number.");
  } else if (code >= 65 && code <= 90) {
    alert("It's an uppercase letter.");
  } else if (code >= 97 && code <= 122) {
    alert("It's a lowercase letter.");
  } else {
    alert("It's a special character or symbol.");
  }
} else {
  alert("Please enter only a single character.");
}

// Task no 2
var num1 = +prompt("Enter first integer:");
var num2 = +prompt("Enter second integer:");

if (num1 > num2) {
  alert("The larger number is: " + num1);
} else if (num2 > num1) {
  alert("The larger number is: " + num2);
} else {
  alert("Both numbers are equal.");
}

// Task no 3
var number = +prompt("Enter a number:");

if (number > 0) {
  alert("The number is positive.");
} else if (number < -0) {
  alert("The number is negative.");
} else {
  alert("The number is zero.");
}

// Task no 4
var char = prompt("Enter a single character:").toLowerCase();

if (char.length === 1) {
  if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
    alert(true);
  } else {
    alert(false);
  }
} else {
  alert("Please enter only one character.");
}

// Task no 5
var correctPassword = "abc123";
var userPassword = prompt("Enter your password:");

if (!userPassword) {
  alert("Please enter your password");
} else if (userPassword === correctPassword) {
  alert("Correct! The password you entered matches the original password");
} else {
  alert("Incorrect password");
}

// Task no 6
var greeting;
var hour = 13;

if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}

alert(greeting);

// Task no 7
var time = +prompt("Enter time in 24-hour format (e.g., 1900):");

if (time >= 0 && time < 1200) {
  alert("Good Morning");
} else if (time >= 1200 && time < 1700) {
  alert("Good Afternoon");
} else if (time >= 1700 && time < 2100) {
  alert("Good Evening");
} else if (time >= 2100 && time <= 2359) {
  alert("Good Night");
} else {
  alert("Invalid time entered");
}
