// Assignment Code
var generateBtn = document.querySelector("#generate");

/*Create variables for:
specialCharacters
lowercaseLetters
uppercaseLetters
numbers*/ 
var numbers = ["0","1","2","3","4","5","6","7","8","9"];
var specialCharacters = ["*", "&", "#", "%", "@"];
var lowercaseLetters = ["a","c","t", "b", "e","f"];
var uppercaseLetters = ["A", "B", "D", "F","H","J","K","L"]


/*We have to create prompts and confirm if the user wants:
When the user clicks the generate button it prompts them to confirm choices:
Lowercase, uppdercase, numbers, and/or special characters. First step: what happens when the user clicks the generatePassword button?*/



var passwordText ="";
var characterSelectionPool = [];


function generatePassword() {
  
  //user prompt:password length. If invalid, return user to beginning of this segment.
    var passwordLength = prompt("It's time to generate your password! \nHow long would you like your password to be? \n(Please choose between 8 to 128 characters)")
  
    if (passwordLength >=8 &&
      passwordLength <=128){
  
      console.log("passwordLength is",passwordLength);
      alert("Your password will be " + passwordLength + " characters.")}
  
      else{
      console.log("Invalid Entry");
     //alert("Please choose a number between 8 and 128.");
      return "Please choose a number between 8 and 128"; //This logged in the generate password box!!!
  }
  
    var hasSpecialCharacters = confirm("Would you like to include special characters? i.e. *,&,#,>");
  //user prompt: special characters
      if (hasSpecialCharacters){
      console.log("Has Special Characters is True");
      characterSelectionPool = characterSelectionPool.concat(specialCharacters);
    }
      //alert("You have chosen to include special characters.");}
      
        else{
        console.log("Has Special Characters is False");
        //alert("NOTE: You have chose to NOT include special characters. \nYour password is stronger WITH special characters.");
  }
  //user prompt:lowercase letters
    var hasLowercaseLetters = confirm("Would you like to include lowercase letters? i.e. a,d,f,g");
  
      if (hasLowercaseLetters){
      console.log("hasLowercaseLetters is True");
      characterSelectionPool = characterSelectionPool.concat(lowercaseLetters);
      }
  //alert("You have chosen to include lowercase letters.")}
    
        else{
        console.log("hasLowercaseLetters is False");
        alert("You have chosen NOT to include lowercase letters.");
  }
  //user prompt:uppercase letters
    var hasUppercaseLetters = confirm("Would you like to include uppercase letters? i.e. F,R,O,G");
  
      if (hasUppercaseLetters){
      console.log("hasUppercaseLetters is True");
    alert("You have chosen to include uppercase letters.")
    characterSelectionPool = characterSelectionPool.concat(specialCharacters);}
  
        else{
        console.log("hasUppercaseLetters is False");
        alert("You have chosen NOT to include uppercase letters.");
  }
  
  //user confirm: numbers?
    var hasNumbers = confirm("Would you like to include numbers? i.e. 5,8,3");
  
      if (hasNumbers){
      console.log("hasNumber is True");
      characterSelectionPool=characterSelectionPool.concat(numbers);
      }
  
      // alert("You have chosen to include numbers.")}
  
        else{
        console.log("hasNumbers is False");
        alert("You have chosen NOT to include numbers.");
  }
  
        console.log(characterSelectionPool);

      if (characterSelectionPool.length > 0){
  
        for(i=0; i < passwordLength; i++) {
  
          passwordText += characterSelectionPool[
  
            Math.floor((Math.random())*characterSelectionPool.length)
          ]
            console.log(passwordText);
            
          }
        }
  return passwordText;
}

      //Write password to the #password input
function writePassword(){
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  console.log("Your password is " + password);
}

      console.log(passwordText)
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
