function calculateSumandAverage() {
    var numValues = parseInt(prompt("How many numbers do you want to enter?"));
    var numbers = [];
  

    //to fill the array of numbers
    for (var i = 0; i < numValues; i++) {
      var input = parseFloat(prompt(`Enter number ${i + 1}:`));
      numbers.push(input);
    }
  
    //to calculate the sum of the numbers
    var sum = 0;
    for (var j = 0; j < numbers.length; j++) {
      sum += numbers[j];
    }
  
    //to calculate the average
    var average = sum / numbers.length;
  
    alert(`Sum: ${sum} \nAverage: ${average}`);
  }
  
  // Call the function to start the process
  calculateSumandAverage();
  