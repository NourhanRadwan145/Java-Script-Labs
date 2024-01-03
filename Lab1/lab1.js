var firstName = prompt('Enter your first name:');
var lastName = prompt('Enter your last name:');
var fullName = `${firstName} ${lastName}`;
var isName=confirm(`Your Name is ${fullName} ?`);
console.log(isName);
var value= true;
if(isName)
{
   var birthYear = prompt('Enter your birth year:');
   var currentYear = 2023;
   var age = currentYear - birthYear;
   var welcomeMsg = `Welcome, ${fullName}! Your age is ${age} years.`;
   alert(welcomeMsg);
   document.write("Hi, " + fullName);
}
else
{

   document.write("Anonymous!");

}