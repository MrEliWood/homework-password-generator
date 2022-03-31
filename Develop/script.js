function generatePassword(){

  // character count
  var charCount = prompt(`How many characters are required for your password?
  
Please enter a number between 8 and 128.`);

  // validate character count
  if (charCount < 8 || charCount > 128) {
    var charCount = prompt(`It looks like we can't use that many characters.
    
Please enter a number between 8 and 128`);
  }

  // user selects character types
  var incLower = confirm("Include lowercase letters?");
  var incUpper = confirm("Include uppercase letters?");
  var incNum = confirm("Include numbers?");
  var incSpec = confirm("Include special characters?");

  // define characters
  if (incLower) {
    var lower = "abcdefghijklmnopqrstuvwxyz";
  }

  if (incUpper) {
    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYS";
  }

  if (incNum) {
    var num = "0123456789";
  }

  if (incSpec) {
    var spec = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  }

  var allChoices = [lower, upper, num, spec];

  // filter unwanted characters
  var chosenChars = allChoices.filter(charFilter)

  function charFilter(i) {
    if (i !== false){
      return i;
    }
  }

  var characters = chosenChars.toString();

  // generage password based on selections
    var password = ``;
  
  for (var p = 0; p <= charCount; p++) {
    password += characters[Math.floor(Math.random() * characters.length)];
    }
  
  return password

}

// Assignment Code, DO NOT EDIT ANTHING  BELOW THIS LINE
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
