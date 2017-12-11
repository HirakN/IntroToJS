function fizzBuzz(number) {
	if (number % 3 === 0 && number % 5 === 0) {
		return"FizzBuzz";
	} else if (number % 5 == 0) {
		return "Buzz";
	} else if (number % 3 === 0) {
		return"Fizz";
	} else {
		return number;
	}
}

var exit_flag = "y";

while(exit_flag === "y") {
	var choice = parseInt(prompt("Welcome to fizzbuzz. Enter a number: "));
	alert(fizzBuzz(choice));

	exit_flag =  prompt("Would you like to continue (y/n): ");
}

var counter = 1;

while (counter < 100) {
	console.log(fizzBuzz(counter));
	counter++;
}