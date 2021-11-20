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
  passwordText.value = "#password";

  //user prompt:password length. If invalid,the return at the end of password length if statement will bring the user to beginning of this segment again.
  var passwordLength =prompt("It's time to generate your password! \n(Please choose between 8 to 128 characters)");

  if (passwordLength <= 8 ||
    passwordLength >= 128 ) {
      //Alert user if not a number. 
      alert("Please try again and choose an appropriate password length.")
      return "";
  }

  else{
    alert("Password Length is ok");
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
      //Console.log shows each character being added to the string from 1-10!  
    }
  }
  else{
    alert("Invalid Password options selected")
  }

  return passwordText;
  
}
console.log(password)
console.log(passwordText);

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
 
  console.log(pwText);
  console.log(passwordText);
}
//Write password to the #password input
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

