function countVowel() {
    let userInput = prompt("Enter a string:");
    
    if (userInput !== null) {

        let vowelCount = 0;

        for (let i = 0; i < userInput.length; i++) {
            // Check if the current character is a vowel
            if (userInput[i] === 'a' || userInput[i] === 'e' || userInput[i] === 'i' || userInput[i] === 'o' || userInput[i] === 'u') {
                vowelCount++;
            }
        }

        alert(`The number of vowels in the string is: ${vowelCount}`);
    }
}

countVowel();
