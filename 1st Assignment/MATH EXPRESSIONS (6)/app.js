var a = 10;

document.write("Result: <br>");
document.write("The value of a is: :" + a + "<br><br>");

document.write("The value of ++a is: "+ (++a) +"</br>");
document.write("Now the value of ++a is: "+ a +"</br><br>"); 


document.write("The value of a++ is: "+ (a++) +"</br>");
document.write("Now the value of a++ is: "+ a +"</br><br>"); 

document.write("The value of --a is: " + (--a) + "</br>" );
document.write("Now the value of --a is: " + (a) + "</br></br>" );

document.write("The value of a-- is: "+ (a--) + "</br>");
document.write("Now the value os a-- is: " + a + "</br></br>")


var a = 2, b = 1;
var result = --a - --b + ++b + b--;

var a = --a - --b;
var b = ++b + b--;


document.write("a is: " + a + "</br>");
document.write("b is: " + b + "</br>" );
document.write("Result is: " + result + "</br>");

var userName = prompt("Please Enter Your Name: " );

alert("Hello, " + userName + " Welcome to our website");