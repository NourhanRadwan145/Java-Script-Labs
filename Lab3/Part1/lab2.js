function calculator() {
    var firstNumber = parseFloat(prompt("Enter the first number:"));
    var operation = prompt("Enter the operation (sum, subtract, multiply, divide, modulus):");
    var secondNumber = parseFloat(prompt("Enter the second number:"));
    var result;
  
    switch (operation.toLowerCase()) {
      case "sum":
        result = firstNumber + secondNumber;
        break;
      case "subtract":
        result = firstNumber - secondNumber;
        break;
      case "multiply":
        result = firstNumber * secondNumber;
        break;
      case "divide":
        if (secondNumber === 0) {
          result = "Cannot divide by zero!";
        } else {
          result = firstNumber / secondNumber;
        }
        break;
      case "modulus":
        result = firstNumber % secondNumber;
        break;
      default:
        result = "Invalid operation";
    }
  
    alert("Result: " + result);
  }
  
  // Call the function to start the calculator
  calculator();
  