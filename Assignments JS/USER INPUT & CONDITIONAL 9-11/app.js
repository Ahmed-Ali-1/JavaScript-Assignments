// var city = prompt("Enter your city name:");

// if (city === "Karachi") {
//   alert("Welcome to city of lights");
// }

// var gender = prompt("Enter your gender (male/female):")

// if (gender === "male"){
//     alert("Good Morning Sir")
// }else if( gender === "female"){
//     alert(" Good Morning Maam")
// }

// var signal = prompt("Enter traffic signal color (Red, Yellow, Green):");

// if (signal === "Red"){
//     alert("Must Stop");
// }else if(signal === "Yellow"){
//     alert("Ready to move")
// }else if(signal === "Green"){
//     alert("Move On ")
// }

// var fuel = prompt("Enter remaining fuel in litres:");

// if (fuel < 0.25){
//     alert("Please refill the fuel in your car");
// }

// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }

// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }

// var c = 12;
// if (c++ === 13) {
//   alert("condition 1 is true");
// }

// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost) {
//   alert("The cost equals");
// }


// if (true){ 
// alert("True"); 
// } 
// if (false){ 
// alert("False"); 
// }



var subject1 = +prompt("Enter marks obtained in Subject 1:");
var subject2 = +prompt("Enter marks obtained in Subject 2:");
var subject3 = +prompt("Enter marks obtained in Subject 3:");
var totalMarks = +prompt("Enter total marks:");


var marksObtained = + subject1 + subject2 + subject3;
var per = (marksObtained / totalMarks) * 100;

var grade, remarks;


if (per >= 80 && per <=100){
    grade = "A-One";
    remarks = "Excellent";
}else if(per >= 70 && per <=80){
    grade = "A";
    remarks = "Good";
}else if (per >=60 && per <=70){
    grade = "B";
    remarks = "You need to improve";
}else{
    grade = "Fail";
    remarks = "Supply Aaa Gai";
}

document.write("<h2>Mark Sheet</h2></br>");
document.write("Total Marks: " + totalMarks + "</br>");
document.write("Marks Obtained: " + marksObtained + "</br>");
document.write("Percentage: " + per + "%</br>");
document.write("Grade: " + grade+ "</br>");
document.write("Remarks: " + remarks+ "</br>");






// document.write("Computer: " + comp + "</br> Science: " + science + "</br> Maths: " + maths + "</br> English: " +eng+ "</br>");


// var fullComp = 100;
// var fullScience = 100;
// var fullMaths = 100;
// var fullEng = 100;

// var totalMarks = fullComp + fullScience + fullMaths + fullEng;

// document.write("Totals Marks: " + totalMarks + "</br>");

// var marksObtained = comp + science + maths + eng;

// document.write("Marks Obtained: " + marksObtained);

