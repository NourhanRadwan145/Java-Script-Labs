function checkAge() {
    let userInput;
    let age;

    do {
        userInput = prompt("Please enter your age:");

        if (userInput !== null) {
            age = Number(userInput); //Casting

            //Check if the age is not a number and +ve value
            if (!isNaN(age) && age > 0) {
                let status;

                switch (true) {
                    case age >= 1 && age <= 10:
                        status = "Child";
                        break;
                    case age >= 11 && age <= 18:
                        status = "Teenager";
                        break;
                    case age >= 19 && age <= 50:
                        status = "Grown up";
                        break;
                    default:
                        status = "Old";
                        break;
                }

                alert(`You are a ${status}.`);

            } else {
                alert("Please enter a valid positive number for your age.");
            }
        }
    } while (userInput !== null);
}

checkAge(); //Calling the fuction
