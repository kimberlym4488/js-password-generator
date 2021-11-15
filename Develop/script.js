// Assignment Code
var generateBtn = document.querySelector("#generate");

/*Create variables for:
specialCharacters
lowercaseLetters
uppercaseLetters
numbers*/ 

/*We have to create prompts and confirm if the user wants:
When the user clicks the generate button it prompts them to confirm choices:
Lowercase, uppdercase, numbers, and/or special characters. First step: what happens when the user clicks the generatePassword button?*/
function generatePassword(){

  var hasSpecialCharacters = confirm("It's time to generate your password! \nWould you like to include special characters? i.e. *,&,#,>");
//user prompt: special characters
    if (hasSpecialCharacters){
    console.log("True");
    alert("You have chosen to include special characters.");}
    
      else{
      console.log("False");
      alert("NOTE: You have chose to NOT include special characters. \nYour password is stronger WITH special characters.");
}
//user prompt:lowercase letters
  var hasLowercaseLetters = confirm("Would you like to include lowercase letters? i.e. a,d,f,g");

    if (hasLowercaseLetters){
    console.log("True");
    alert("You have chosen to include lowercase letters.")}
  
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
    alert("You have chosen to include numbers.")}

      else{
      console.log("False");
      alert("You have chosen NOT to include numbers.");

  //user entry: password length?

  var passwordLength = confirm("Would you like to include numbers? i.e. 5,8,3");

  if (hasNumbers){
  console.log("True");
  alert("You have chosen to include numbers.")}

    else{
    console.log("False");
    alert("You have chosen NOT to include numbers.");
      
}
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
