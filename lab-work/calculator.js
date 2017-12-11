var calcType = prompt("Enter a calculator option from normal, bmi and mortgage: ");
var exit_flag = "y";

while (exit_flag === "y") {
    if(calcType == "normal") {
        // Calculator
        var choice = prompt('Choose your action (a)dd (s)ubtract (m)ultiply (d)ivide (r)oot (p)ower') || "a";

        if(choice == "a" || choice == "s" || choice == "m" || choice == "d") {
            var value1 = parseFloat(prompt('Enter first value')); 
            var value2 = parseFloat(prompt('Enter the second value'));
        } else if (choice == "r") {
            var value1 = parseFloat(prompt("Enter value"));
        } else if (choice == "p") {
            var value1 = parseFloat(prompt("Enter base"));
            var value2 = parseFloat(prompt("Enter power"));
        }

        switch (choice) {
            case "a":
                alert(value1 + value2);
                break;
            case "s":
                alert(value1 - value2);
                break;
            case "m":
                alert(value1 * value2);
                break;
            case "d":
                alert(value1 / value2);
                break;
            case "r":
                alert(Math.sqrt(value1));
                break;
            case "p": 
                alert(Math.pow(value1, value2));
            default:
                alert("Please enter a, s, m, d ,r or p");
       	}
    } else if(calcType == "bmi"){
        //BMI Calc
        var weight = parseFloat(prompt("Enter your mass in kg: "));
        var height = parseFloat(prompt("Enter your height in m: "));
        var BMI = weight / (height*height);
        alert("This is your BMI: " + BMI);
    } else if (calcType == "mortgage"){
    	var loan = parseFloat(prompt("Enter loan taken out: "));
    	var monthlyInterest = parseFloat(prompt("Enter monthly interest rate: "));
    	monthlyInterest = monthlyInterest/12;
    	var loanPeriod = parseInt(prompt("Enter number of months to repay loan: "));

    	// var monthlyRepay = loan * ( (monthlyInterest * Math.pow( (1 + monthlyInterest),loanPeriod) ) / ( Math.pow( (1 + monthlyInterest), loanPeriod) ));
    	var topRow = monthlyInterest * Math.pow((1 + monthlyInterest), loanPeriod);
    	console.log(topRow);
    	var botRow = Math.pow((1 + monthlyInterest), loanPeriod) - 1;
    	console.log(botRow);
    	var result = loan * (topRow/botRow);
    	alert("Your monthly repayment is: " + result);

    	// alert(result);
    } else {
        alert("Acceptable inputs are: BMI, normal or mortgage");
    }

    exit_flag = prompt ("Do you want to go again? y/n?: ")
}