// A simple everyday if

// Even empty objects are truthy
var theThingWotIsTrue = false;

if (theThingWotIsTrue) {
	alert("dawg");
}

// In one line
if (theThingWotIsTrue) alert("dawg");

// Comparisons (>, <, >=, <=, ==, ===)

// If/else
var dolla = parseFloat(prompt("How much money on ya?"));
var drink = parseInt(prompt("How many drinks have you had?"));
var crispPrice = parseFloat(prompt("How much do the crisps cost?"));
var crisp = parseInt(prompt("How many crisps have you already had?"));

if ((dolla > 10) && (drink < 3)) {
    drink++;
    console.log("You have had " + drink + " drinks");
} else if ((dolla > 5) || (crispPrice === 0)) {
    crisp++;
    console.log("You just bought crisps, you now have " + crisp);
} else {
    console.log("I'm going home!");
}

// Switch statement
var name = "Ollie";

switch(name) {
	case "Markson": 
    	console.log("Good evening Mr Aigbodi");
		break;
	case "Stephen":
		console.log("Salutations Mr Reid");
		break;
	case "Lexie": 
    	console.log("Afternoon chief!");
    	break;
	default:
    	console.log("yo");
}
