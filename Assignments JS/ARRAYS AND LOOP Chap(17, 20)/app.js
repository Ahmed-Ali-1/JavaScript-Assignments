// var arr = [[]]

// var arr = [
//     [0, 1, 2, 3],
//     [1, 0, 2, 1],
//     [2, 1, 0, 1]
// ];
// for (var i = 0; i < arr.length; i++) {
//     document.write(arr[i].join(" "), "<br>")
// }




// var count = 10;

// for (var i = 1; i <= count; i++) {
//     document.write(i, "<br>")
// }

// var userNum = +prompt("Enter a number to show table")
// var userMulti = +prompt("Enter lenght table")

// document.write("Multiply by ", userNum, "<br>")
// document.write("Lenght ", userMulti, "<br><br>")

// for (var i = 1; i <= userMulti; i++) {
//     var result = userNum * i;
//     document.write(userNum, " x ", i, " = ", result, "<br>")

// }


// var fruits = ["apple", "banana", "mango", "orange", "strawberry"]

// for (var i = 0; i < fruits.length; i++) {
//     document.write("Element at index ", i, " is ", fruits[i], "<br>")
// }



// document.write("Counting:", "<br><br>")
// for (var i = 1; i <= 15; i++) {
//     document.write(i, " , ")
// }


// document.write("<br><br>", "Reverse counting:", "<br><br>")
// for (var j = 10; j > 0; j--) {
//     document.write(j, ",")
// }


// document.write("<br><br>", "Even:", "<br><br>")
// for (var num = 0; num <= 20; num++) {
//     if (num % 2 == 0) {
//         document.write(num, ",")
//     }
// }

// document.write("<br><br>", "Odd:", "<br><br>")
// for (var num = 0; num < 20; num++) {
//     if (num % 2 === 1) {
//         document.write(num, " , ")
//     }
// }

// document.write("<br><br>", "Series:", "<br><br>")
// for (var num = 2; num <= 20; num += 2) {
//     document.write(num, "k, ")
// }


// var bakery = ["cake", "apple pie", "cookie", "chips", "patties"]

// var userSearch = prompt("Welcome to ABC Bakery. What do you want to order ma'am?")

// var isFound = false

// for (var i = 0; i < bakery.length; i++) {
//     if (userSearch === bakery[i]) {
//         isFound = true
//         document.write("cookie is avaible at index ", i, " in our bakery");
//         break
//     }
// }
// if (!isFound) {
//     document.write("We are sorry ", userSearch, " is not available in our bakery.")
// }

// var A = [24, 53, 78, 91, 12];
// var largest = A[0];

// for (var i = 1; i < A.length; i++) {
//     if (A[i] > largest) {
//         largest = A[i];
//     }
// }

// document.write("Array items: " + A.join(", ") + "<br>");
// document.write("The largest number is: " + largest);




// var arr = [24, 53, 78, 91, 12];
// var largest = arr[0];

// for (var i = 1; i < arr.length; i++) {
//     if (arr[i] < largest) {
//         largest = arr[i];
//     }
// }

// document.write("Array items: " + arr.join(", ") + "<br>");
// document.write("The largest number is: " + largest);





// for (var i = 0; i <= 100; i++) {
//     if (i % 5 == 0) {
//         document.write(i, " , ")
//     }
// }
