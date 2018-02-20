//Project 1 Cheatsheet

// DO NOT TRY TO RUN THIS FILE! IT WILL LIKELY BREAK THINGS!



// *********************
// ***** VARIABLES *****
// *********************

var myString = “Hello world”;
var myBoolean = true;
var myNum = 3; 

var reply = prompt("What’s your name?");



// *****************************
// ***** IF/ELSE STATEMENT *****
// *****************************

if (myVar = 1){
	// do something
} else if (myVar = 2){
	// do something else
} else {
	// default to this
};



// ********************
// ***** FOR LOOP *****
// ********************

/*
	This loop will run 10 times.  
	i is a var that acts as a counter
	i < 10 is the condition
	i++ is the same as i = i + 1
*/

for(i=0; i<10; i++){
	// code here
};



// **********************
// ***** FUNCTIONS ******
// **********************

function myFunction(){
	//code goes here
};

myFunction(); //calls the function

//passes data to the function
function myFunction(num1, num2){
	total = num1 + num2;
};

myFunction(4, 7); //4 & 7 are sent as num1 & num2, respectively

// Declaring a function with var is the better way to write your code, but both of the above options will work.



// ************************
// ***** DOM COMMANDS *****
// ************************

var path = document.getElementById("id-name") //gets location of an Element by ID name (Example: <h1 id="id-name">).

path.innerHTML = "Hello World"; //writes (and overwrites) to that location

var newItem = document.createElement("p"); //creates a new Element <p>
newItem.innerHTML = "Hey, how are ya?"; //fill the Element <p>Hey, how are ya?</p>
panel.appendChild( newItem ); // adds that Element to the panel <div id="panel"><p>Hey, how are ya?</p></div>

path.style.color = "red"; //changes the text to red (color: red;)
path.style.backgroundColor = "green" //changes the background-color: green

path.classList.toggle("roll"); //.add .remove are also options



// ********************************
// ***** COMPARISON OPERATORS *****
// ********************************

>	//greater than
< 	//less than
>=	//greater than or equal to
<=	//less than or equal to
== 	//is equal to
!= 	//is not equal to



// *********************************
// ***** ARITHMATIC OPERATORS ******
// *********************************

+ 		//addition
- 		//subtraction
"/" 	// division
* 		//multiplication
%		//modulo (finds the remainder)



// **************************
// ***** MATH FUNCTIONS *****
// **************************

Math.random()	//generates random num
Math.round() 	//rounds up/down
Math.ceil() 	//rounds up
Math.floor() 	//rounds down



// **************************
// ***** DATE FUNCTIONS *****
// **************************

var myDate = new Date(); // populates the var with the full date
var newTime = new Date.getHours(); // Gives the current hour in 24-hour time

// Remember, there are many, many other options: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date



// ****************************
// ***** TROUBLESHOOTING ******
// ****************************

console.log(varName); //is a great way to see what’s going on “under the hood”

// You can also type in a variable's name into the console and it will spit out the value.

// Don't forget to look for SyntaxErrors in the Inspector Console!!!

