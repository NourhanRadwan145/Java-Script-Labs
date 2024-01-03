// Array to hold contacts
var contacts = [];

function phoneBook() {
  while (true) {
    var operation = prompt("Enter 'add' to add a contact or 'search' to search for a contact (or type 'exit' to quit):");

    if (operation.toLowerCase() === "exit") {
      alert("Exiting phone book. Goodbye!");
      break;
    }

    if (operation.toLowerCase() === "add") {
      var name = prompt("Enter the name of the contact:");
      var phoneNumber = prompt("Enter the phone number:");

      var contact = {
        name: name,
        phoneNumber: phoneNumber
      };

      contacts.push(contact); //to push the created object into the array
      alert("Contact added successfully!");

    } else if (operation.toLowerCase() === "search") {
      var searchInput = prompt("Enter the name or phone number to search:");

      var foundContacts = contacts.filter(function(contact) {
        return (
          contact.name.toLowerCase().includes(searchInput.toLowerCase()) ||
          contact.phoneNumber.includes(searchInput)
        );
      });

      if (foundContacts.length > 0) {
        var contactDetails = ""; //An empty string
        //For each matched contact, it appends its name and phone number to the contactDetails string.
        foundContacts.forEach(function(contact) {
          contactDetails += `Name: ${contact.name}, Phone: ${contact.phoneNumber}\n`;
        });
        alert(`Found contact(s):\n${contactDetails}`);
      } else {
        alert("No matching contact found.");
      }
    } else {
      alert("Invalid operation. Please enter 'add', 'search', or 'exit'.");
    }
  }
}

// Start the phone book app
phoneBook();
