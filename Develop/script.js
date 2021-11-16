// Assignment Code
var generateBtn = document.querySelector("#generate");

/*Create variables for:
specialCharacters
lowercaseLetters
uppercaseLetters
numbers*/ 
var numbers = ["0","1","2"];
var specialCharacters = ["*", "&", "#"];
var lowercaseLetters = ["a","c","t"];

/*We have to create prompts and confirm if the user wants:
When the user clicks the generate button it prompts them to confirm choices:
Lowercase, uppdercase, numbers, and/or special characters. First step: what happens when the user clicks the generatePassword button?*/
function generatePassword(){
  var returnVal = "";
  var characterSelectionPool = [];
//user prompt:password length. If invalid, return user to beginning of this segment.
  var passwordLength = prompt("It's time to generate your password! \nHow long would you like your password to be? \n(Please choose between 8 to 128 characters)")

  if (passwordLength >=8 &&
    passwordLength <=128){

    console.log("passwordLength",passwordLength);
    alert("Your password will be" + passwordLength + ".")}

    else{
    console.log("Invalid Entry");
   //alert("Please choose a number between 8 and 128.");
    return "Please choose a number between 8 and 128"; //This logged in the generate password box!!!
}

  var hasSpecialCharacters = confirm("Would you like to include special characters? i.e. *,&,#,>");
//user prompt: special characters
    if (hasSpecialCharacters){
    console.log("Has Special Characters: True");
    characterSelectionPool = characterSelectionPool.concat(specialCharacters);
  }
    //alert("You have chosen to include special characters.");}
    
      else{
      console.log("Has Special Characters:False");
      //alert("NOTE: You have chose to NOT include special characters. \nYour password is stronger WITH special characters.");
}
//user prompt:lowercase letters
  var hasLowercaseLetters = confirm("Would you like to include lowercase letters? i.e. a,d,f,g");

    if (hasLowercaseLetters){
    console.log("True");
    characterSelectionPool = characterSelectionPool.concat(lowercaseLetters);
    }
//alert("You have chosen to include lowercase letters.")}
  
      else{
      console.log("False");
      alert("You have chosen NOT to include lowercase letters.");
}
//user prompt:uppercase letters
  var hasUppercaseLetters = confirm("Would you like to include uppercase letters? i.e. F,R,O,G");

    if (hasUppercaseLetters){
    console.log("True");
  alert("You have chosen to include uppercase letters.")}

      else{
      console.log("False");
      alert("You have chosen NOT to include uppercase letters.");
}

//user confirm: numbers?
  var hasNumbers = confirm("Would you like to include numbers? i.e. 5,8,3");

    if (hasNumbers){
    console.log("True");
    characterSelectionPool=characterSelectionPool.concat(numbers);
    }

    // alert("You have chosen to include numbers.")}

      else{
      console.log("False");
      alert("You have chosen NOT to include numbers.");
      }

    if (characterSelectionPool.length > 0){
      for(i=0; i < passwordLength.length; i++) {
        returnVal = returnVal + characterSelectionPool[
          Math.floor((Math.random)*characterSelectionPool.length)]
          console.log(returnVal);


    }  
return returnVal;
    }
  }



// Write password to the #password input
function writePassword(){
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

  }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
