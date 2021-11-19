// Assignment Code
var generateBtn = document.querySelector("#generate");

/*Create variables for:
specialCharacters
lowercaseLetters
uppercaseLetters
numbers*/
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = ["*", "&", "#", "%", "@"];
var lowercaseLetters = ["a", "c", "t", "b", "e", "f"];
var uppercaseLetters = ["A", "B", "D", "F", "H", "J", "K", "L"]

/*We have to create prompts and confirm if the user wants:
When the user clicks the generate button it prompts them to confirm choices:
Lowercase, uppdercase, numbers, and/or special characters. First step: what happens when the user clicks the generatePassword button?*/

var passwordText = "";
var characterSelectionPool = [];

function generatePassword() {

  //user prompt:password length. If invalid,the return at the end of password length if statement will bring the user to beginning of this segment again.
  var passwordLength = prompt("It's time to generate your password! \nHow long would you like your password to be? \n(Please choose between 8 to 128 characters)")
  passwordLength = parseInt(passwordLength);
 
  if (passwordLength <= 8 ||
    passwordLength >= 128 || passwordLength !== typeof "number") {
    //Alert user if not a number. 
      alert("Please choose a number between 8 and 128");
      //return "" returns an empty string if number is not a number or not the right length
      return "";
    }

  var hasSpecialCharacters = confirm("Would you like to include special characters? i.e. *,&,#,>");
  //user prompt: special characters
  if (hasSpecialCharacters) {
    characterSelectionPool = characterSelectionPool.concat(specialCharacters);
  }

  //user prompt:lowercase letters
  var hasLowercaseLetters = confirm("Would you like to include lowercase letters? i.e. a,d,f,g");

  if (hasLowercaseLetters) {
    characterSelectionPool = characterSelectionPool.concat(lowercaseLetters);
  }

  //user prompt:uppercase letters
  var hasUppercaseLetters = confirm("Would you like to include uppercase letters? i.e. F,R,O,G");

  if (hasUppercaseLetters) {
    characterSelectionPool = characterSelectionPool.concat(uppercaseLetters)
  }

  //user confirm: numbers?
  var hasNumbers = confirm("Would you like to include numbers? i.e. 5,8,3");

  if (hasNumbers) {
    characterSelectionPool = characterSelectionPool.concat(numbers);
  }

  //This will only run if the user answers Yes to one of the questions above. Otherwise they are returned to the beginning.

  if (characterSelectionPool.length > 0) {
    //The for-loop below enables this until i (index choice from characterSelectionPool) is less than the password length requested. If a user chooses 10, this will run 10 times. 

    // The passwordLength input is how many characters should be chosen from the characterSelectionPool. 
    for (var i = 0; i < passwordLength; i++) {

      //passwordText is # of characters in passwordLength (specified by the user in the beginning of the function.) 
      passwordText += characterSelectionPool[
        Math.floor((Math.random()) * characterSelectionPool.length)
      ]  
    }
  }

  else {
    return "You didn't select any password options - please try again"
  }
//writes the passwordText to the output of the generatePassword function where it becomes "password" which is written using pwText to the DOM in the id = password section of HTML.
  return passwordText;
}

function writePassword() {
  var password = generatePassword();
  var pwText = document.querySelector("#password");

  pwText.value = password;
  //console.log("Your password is " + password);
  console.log(pwText);
  console.log(passwordText);
}
//Write password to the #password input
// Add event listener to generate button
//This starts the whole process of calling the write password function which calls the generatePassword function and returns us a value if everything goes the way it should (pw is a # between 8-128 digits, at least one option selected from numbers, special characters, uppercaseLetters, or lowercaseLetters.)
generateBtn.addEventListener("click", writePassword)
