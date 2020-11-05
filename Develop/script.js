
//Created arrays with possible variable values
var passNumber = [1, 2, 3, 4, 5, 6, 7, 8];
var passCharacter = ["!", "&", "@", "$", "%"];
var passLowerCase = ["a", "b", "c", "d", "e", "f"];

// Assignment Code
var generateBtn = document.querySelector("#generate");

 
//ask user input 
var userChoice = prompt("How many characters would you like your password to be? Choose between 8 and 20");


if (userChoice) {
}
else if (enter < 8 || enter > 20) {
}
else {
  passNumber = confirm("Will this contain numbers?");
  passCharacter = confirm("Will this contain special characters?");
  passLowerCase = confirm("Will this contain Lowercase letter?");
};


//Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

//Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
