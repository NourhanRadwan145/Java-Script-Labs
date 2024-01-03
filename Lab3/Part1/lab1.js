function login() {
    var isLoggin= false;
    while(!isLoggin) {
    var userName = prompt("Enter your username:");
    var passWord = prompt("Enter your password:");
  
    if (userName === "admin" && passWord === "421$$") {
      alert("Welcome! Login successful");
      isLoggin=true;
    } else {
      var errorMsg = ""; // Creating an empty string
      if (userName !== "admin") {
        var errorMsg = errorMsg + "Incorrect username.\n";
        
      }
      if (passWord !== "421$$") {
        var errorMsg = errorMsg + "Incorrect password.";
        
      }
      alert(errorMsg);
    }
}

}
  // Call the function to start the login process
  login();
  