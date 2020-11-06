


// Assignment Code
var generateBtn = document.querySelector("#generate");


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password
} 
generateBtn.addEventListener("click", writePassword);

var generateBtn = document.querySelector("#generate");
function getRandomIndex(maxLength) {
  return Math.floor(Math.random() * Math.floor(maxLength));
};


function generatePassword() {
  var userChoice;
  var passwordCharacters = '';
  var randomPassword = '';
  var index;

  //ask user input 
userChoice = prompt("How many characters would you like your password to be? Choose between 8 and 128");

while (userChoice < 8 || userChoice > 128) {
  userChoice = prompt("Choose password at least 8 charcters but no more than 128 characters");
} 
//user confirms will it contain lower case
while (passwordCharacters === '') {
  if (confirm("Will it contain lower case letters?")) {
  passwordCharacters = passwordCharacters + 'abcdefghijklmnopqrstuvwxyz';
  }
//user confirms will it contain upper case 
  if (confirm("Will it contain upper case letters?")) {
    passwordCharacters = passwordCharacters + 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }
//user confirms will it contain special characters
  if (confirm("Will it contain special characters?")) {
    passwordCharacters = passwordCharacters + '!@#$%^&*+-';
  }
//user confirm will it contain numbers
  if (confirm("Will it contain numbers?")) {
    passwordCharacters = passwordCharacters + '123456789';
  }
}
//created for loop to generate random password 
for (var i = 0; i < userChoice; i++) {
  index = getRandomIndex(passwordCharacters.length);
  randomPassword = randomPassword + passwordCharacters.charAt(index);
  
}

  return randomPassword;
}


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password
} 

generateBtn.addEventListener("click", writePassword);