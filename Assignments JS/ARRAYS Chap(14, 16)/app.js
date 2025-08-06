// var emptyArr = [];

// var emptyArr = new Array();

// var stringArr = ["Ahmed", "Ali", "Sara"];

// var numArr = [1, 2, 3, 4, 5];

// var booleanArr = [true, false, true];

// var mixedArr = ["Ahmed", 1, true];

// var arr = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.", "Phil.", "PhD"];

// document.write("<h2>Qualifications:</h2>");

// for (var i = 0; i < arr.length; i++) {
//   document.write(i + 1, ") ", arr[i], "</br>");
// }

// var arrStudent = ["Michael", "John", "Tony"];

// var arrScore = [320, 230, 480];

// var total = 500;

// for (var i = 0; i < arrStudent.length; i++) {
//   var per = (arrScore[i] / total) * 100;
//   document.write("Score of ", arrStudent[i], " is ", arrScore[i], " Percentage ", per, ":%", "</br>");
// }


// var colors = ["Yellow", "Red", "Pink"]
// document.write("<b>Original Colors:</b> " + colors + "<br><br>")

// var colorBigin = prompt("Enter a color to add at the beginning:")
// colors.unshift(colorBigin);
// document.write("<b>After adding at beginning:</b> " + colors + "<br><br>")


// var colorEnd = prompt("Enter a color to add at the End:")
// colors.push(colorEnd)
// document.write("<b>After adding at the end:</b>", colors + "<br><br>")


// colors.push("Purple", "Orange")
// document.write("<b>After adding two color at the end:</b>", colors + "<br><br>")

// colors.shift()
// document.write("<b>After remove the color in the start:</b>", colors + "<br><br>")

// colors.pop()
// document.write("<b>After remove the color in the end:</b>", colors + "<br><br>")

// var indexToAdd = +prompt("At which index do you want to add a color?");
// var colorToAdd = prompt("Enter the color name to add:");
// colors.splice(indexToAdd, 0, colorToAdd);
// document.write("<b>After adding at index " + indexToAdd + ":</b> " + colors + "<br><br>");


// var userDelInd = +prompt("At which index do you want to delete color(s)?")
// var userDelColor = +prompt("How many color(s) you want to delet?")

// colors.splice(userDelInd, userDelColor)
// document.write("<b>After deleting from index" + userDelInd + ":</b> " + colors + "<br><br>")




// var score = [320, 230, 480, 120]

// document.write("<b>Scores of Students:</b> " + score + "<br><br>");



// var arr = ["Karachi", "Lahore", "Islamabad", "Punjab", "Quetta"]

// document.write("<b>Cities List:</b> " + arr + "<br><br>");

// var newArray = arr.slice(2, 4)
// document.write("<b>Selected cities list:</b> " + newArray + "<br><br>");



// var arr = ["This", "is", "my", "Cat"]
// document.write("<b>Array:</b> " + arr + "<br><br>");

// var newArray = arr.join(" ")
// document.write("<b>String:</b> " + newArray + "<br><br>");


// var device = ["Keyboard", "mouse", "printer", "monitor"]

// document.write("Device:", "</br>", device, "<br><br>")

// for (var i = 0; i < device.length; i++) {
//     document.write("Out:", "<br>", device[i], "</br>")
// }


// var menu = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"]

// document.write("<select>")
// for (var i = 0; i < menu.length; i++) {
//     document.write("<option>" + menu[i] + "</option>")
// }

// document.write("</select>")