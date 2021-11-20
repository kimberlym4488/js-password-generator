// Assignment Code
var generateBtn = document.querySelector("#generate");

/*Create variables for:
specialCharacters
lowercaseLetters
uppercaseLetters
numbers*/

var numbers = '0123456789'.split('');
var specialCharacters = '*$%&*#@'.split('');
var lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz'.split('');
var uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');


/*We have to create prompts and confirm if the user wants:
When the user clicks the generate button it prompts them to confirm choices:
Lowercase, uppdercase, numbers, and/or special characters. First step: what happens when the user clicks the generatePassword button?*/

var passwordText = "";
var characterSelectionPool = [];

function generatePassword() {
  passwordText="";

  //user prompt:password length. If invalid,the return at the end of password length if statement will bring the user to beginning of this segment again.
  var passwordLength =prompt("It's time to generate your password! \n(Please choose between 8 to 128 characters)");
  passwordLength=parseInt(passwordLength);
  if (passwordLength < 8 ||
    passwordLength >= 128 || isNaN(passwordLength) === true) {
      //Alert user if not a number. 
      alert("Please try again and choose an appropriate password length between 8-128 numbers.")
      return "";
  }

  var hasSpecialCharacters = confirm("Would you like to include special characters? i.e. *,&,#,>");
  //user prompt: special characters
  if (hasSpecialCharacters) {
    passwordText += specialCharacters[(Math.floor(Math.random())*specialCharacters.length)];
    //if "True", this makes sure that at least one random index item from specialCharacters is included in the passwordText. 
    characterSelectionPool = characterSelectionPool.concat(specialCharacters);
  }

  //user prompt:lowercase letters
  var hasLowercaseLetters = confirm("Would you like to include lowercase letters? i.e. a,d,f,g");

  if (hasLowercaseLetters) {
    passwordText += lowercaseLetters[(Math.floor(Math.random())*lowercaseLetters.length)];     
    //if "True", this makes sure that at least one random index item from specialCharacters is included in the passwordText. 
    characterSelectionPool = characterSelectionPool.concat(lowercaseLetters);
  }

  //user prompt:uppercase letters
  var hasUppercaseLetters = confirm("Would you like to include uppercase letters? i.e. F,R,O,G");

  if (hasUppercaseLetters) {
    passwordText += uppercaseLetters[(Math.floor(Math.random())*uppercaseLetters.length)];
     //if "True", this makes sure that at least one random index item from specialCharacters is included in the passwordText.
    characterSelectionPool = characterSelectionPool.concat(uppercaseLetters)
  }

  //user confirm: numbers?
  var hasNumbers = confirm("Would you like to include numbers? i.e. 5,8,3");

  if (hasNumbers) {
    passwordText += numbers[(Math.floor(Math.random())*numbers.length)];
     //if "True", this makes sure that at least one random index item from specialCharacters is included in the passwordText.
    characterSelectionPool = characterSelectionPool.concat(numbers);
    //Adds the numbers array to the characterSelectionPool.
  }


  //This will only run if the user answers Yes to one of the questions above. Otherwise they are returned to the beginning.

  if (characterSelectionPool.length > 0) {
    
    passwordLength-=parseInt(passwordText.length);
    // We don't want the for loop to run 10 times plus however many required values are added above to passwordText. So we subtract the passwordText length from the password length desired. This means the for loop will only run '6' times since we already have 4 characters in password text. 
    
    for (var i = 0; i < passwordLength; i++) {
      //The for-loop below enables this until i (index choice from characterSelectionPool) is less than the password length requested.

      passwordText += characterSelectionPool[
        Math.floor((Math.random()) * characterSelectionPool.length)
      ] 
    }
  }
  else{
    alert("Invalid Password options selected")
  }

  return passwordText;
}

function writePassword() {
  var password = generatePassword();
  var pwText = document.querySelector("#password");
  
  pwText.value = password;
  
  console.log(password)
  console.log(pwText);
}
//Write password to the #password input
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

