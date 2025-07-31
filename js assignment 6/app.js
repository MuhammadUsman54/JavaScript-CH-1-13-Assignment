// Task no 1
  var number = 10;
document.write("The value of number is: " + number + "<br>");

  number = ++number;
  document.write("The value of ++number is: " + number + "<br>");
  document.write("Now the value of number is: " + number + "<br><br>");

  number = number++;
  document.write("The value of number++ is: " + number + "<br>");
  document.write("Now the value of number is: " + number + "<br><br>");

  number = --number;
  document.write("The value of --number is: " + number + "<br>");
  document.write("Now the value of number is: " + number + "<br><br>");

  number = number--;
  document.write("The value of number-- is: " + number + "<br>");
  document.write("Now the value of number is: " + number + "<br>");

  // Task no 2
     var a = 2, b = 1;
var result = --a - --b + ++b + b--;
console.log("Result of the expression is: " + result);



// Task no 3
  var userName = prompt("Enter your name:");
  alert("Hello, " + userName + "! Welcome.");

// Task no 4
   var num = prompt("Enter a number for multiplication table:", 5);

  document.write(" <hr/> <h3>Multiplication Table of " + num + "</h3>");
  for (var i = 1; i <= 10; i++) {
    document.write(num + " x " + i + " = " + (num * i) + "<br>");
  }

// Task no 5
    
  // a) Take subject names
  var subject1 = prompt("Enter name of first subject:");
  var subject2 = prompt("Enter name of second subject:");
  var subject3 = prompt("Enter name of third subject:");

  // b) Total marks per subject
  var totalMarksPerSubject = 100;

  // c) Get obtained marks for each subject
  var obtained1 = +prompt("Enter obtained marks for " + subject1 + ":");
  var obtained2 = +prompt("Enter obtained marks for " + subject2 + ":");
  var obtained3 = +prompt("Enter obtained marks for " + subject3 + ":");

  // d) Total and percentage
  var totalMarks = totalMarksPerSubject * 3;
  var totalObtained = obtained1 + obtained2 + obtained3;
  var percentage = (totalObtained / totalMarks) * 100;

  // e) Show result in table
  document.write(" <hr/>  <h3>Mark Sheet</h3>");
  document.write("<table border='1' cellspacing='0' cellpadding='5'>");
  document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>");
  document.write("<tr><td>" + subject1 + "</td><td>100</td><td>" + obtained1 + "</td><td>" + (obtained1) + "%</td></tr>");
  document.write("<tr><td>" + subject2 + "</td><td>100</td><td>" + obtained2 + "</td><td>" + (obtained2) + "%</td></tr>");
  document.write("<tr><td>" + subject3 + "</td><td>100</td><td>" + obtained3 + "</td><td>" + (obtained3) + "%</td></tr>");
  document.write("<tr><th colspan='1'>Total</th><th>" + totalMarks + "</th><th>" + totalObtained + "</th><th>" + percentage.toFixed(2) + "%</th></tr>");
  document.write("</table>");