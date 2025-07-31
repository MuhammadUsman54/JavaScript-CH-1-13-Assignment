// Task no 1 Addition of 2 numbers
    let num1 = 10;
    let num2 = 5;
    let sum = num1 + num2;
    document.write("Sum of " + num1 + " and " + num2 + " is " + sum + "<br>");

// Task no 2 Subtraction, Multiplication, Division & Modulus
    let difference = num1 - num2;
    let product = num1 * num2;
    let quotient = num1 / num2;
    let remainder = num1 % num2;
    
    document.write("Subtraction: " + difference + "<br>");
    document.write("Multiplication: " + product + "<br>");
    document.write("Division: " + quotient + "<br>");
    document.write("Modulus: " + remainder + "<br>" + "<br>" + "<br>");

// Task no 3
    var a;
    document.write("Value after variable declaration is: " + a + "<br>");
    a = 5;
    document.write("Initial value: " + a + "<br>");
    a++;
    document.write("Value after increment is: " + a + "<br>");
    a += 7;
    document.write("Value after addition is: " + a + "<br>");
    a--;
    document.write("Value after decrement is: " + a + "<br>");
    var mod = a % 3;
    document.write("The remainder is: " + mod + "<br>");


// Task no 4
    var ticketPrice = 600;
    var totalCost = ticketPrice * 5;
    document.write("Total cost to buy 5 tickets to a movie is " + totalCost + " PKR" + "<br>" + "<br>" + "<br>" + "<br>");

// Task no 5
  var tableNumber = 4;
    document.write("Multiplication Table of " + tableNumber + "<br>");
    for(let i = 1; i <= 10; i++) {
      document.write(tableNumber + " x " + i + " = " + (tableNumber * i) + "<br>" + "<br>");
    }


// Task no 6 
  // a. Celsius to Fahrenheit
    var celsius = 30;
    var fahrenheit = (celsius * 9/5) + 32;
    document.write(celsius + "°C is " + fahrenheit + "°F<br>" + "<br>");

    // c. Fahrenheit to Celsius
    var fahrenTemp = 86;
    var celsiusTemp = (fahrenTemp - 32) * 5/9;
    document.write(fahrenTemp + "°F is " + celsiusTemp.toFixed(2) + "°C" + "<br>");


// Task no 7
    var item1Price = 650;
    var item2Price = 100;
    var item1Quantity = 3;
    var item2Quantity = 7;
    var shippingCharges = 100;

    var totalItem1 = item1Price * item1Quantity;
    var totalItem2 = item2Price * item2Quantity;
    var totalCost = totalItem1 + totalItem2 + shippingCharges;

    document.write("<p>Price of Item 1 is " + item1Price + "</p>");
    document.write("<p>Quantity of Item 1 is " + item1Quantity + "</p>");
    document.write("<p>Price of Item 2 is " + item2Price + "</p>");
    document.write("<p>Quantity of Item 2 is " + item2Quantity + "</p>");
    document.write("<p>Shipping Charges: " + shippingCharges + "</p>");
    document.write("<h3>Total cost of your order is " + totalCost + "</h3>"  + "<br>"  + "<br>"  + "<br>");


// Task no 8
    var totalMarks = 500;
    var marksObtained = 420;
    var percentage = (marksObtained / totalMarks) * 100;
    document.write("<h3>Task 9: Percentage</h3>");
    document.write("Total Marks: " + totalMarks + "<br>");
    document.write("Marks Obtained: " + marksObtained + "<br>");
    document.write("Percentage: " + percentage.toFixed(2) + "%<br><br>"  + "<br>");

    // Task 9
    var usd = 10;
    var riyal = 25;
    var totalPKR = (usd * 104.80) + (riyal * 28);
    document.write("<h3>Currency Conversion</h3>");
    document.write("Total in PKR: " + totalPKR.toFixed(2) + "<br><br>"  + "<br>");

// Task no 10
   var number = 5;
    var result = ((number + 5) * 10) / 2;
    document.write("<h3>Task 10: Arithmetic Expression</h3>");
    document.write("Result: " + result + "<br><br>"  + "<br>");


// Task no 11
    var currentYear = 2025;
    var birthYear = 2000;
    var age1 = currentYear - birthYear;
    var age2 = age1 - 1;
    document.write("<h3>Task 11: Age Calculator</h3>");
    document.write("They are either " + age2 + " or " + age1 + " years old.<br><br>"  + "<br>");

// Task no 12
    var radius = 10;
    var pi = 3.142;
    var circumference = 2 * pi * radius;
    var area = pi * radius * radius;
    document.write("<h3>Task 12: The Geometrizer</h3>");
    document.write("Radius: " + radius + "<br>");
    document.write("The circumference is " + circumference.toFixed(2) + "<br>");
    document.write("The area is " + area.toFixed(2) + "<br><br>");

// Task no 13
  var favoriteSnack = "Chocolate Chip";
    var currentAge = 25;
    var maxAge = 80;
    var snacksPerDay = 2;
    var totalNeeded = (maxAge - currentAge) * 365 * snacksPerDay;
    document.write("<h3>Task 13: Lifetime Supply Calculator</h3>");
    document.write("You will need " + totalNeeded + " " + favoriteSnack + " to last you until the ripe old age of " + maxAge + ".");
