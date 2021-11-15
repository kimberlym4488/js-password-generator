Goal: allow a user to choose different options, resulting in the password of their choice.
# js-password-generator
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page

JavaScript Password Generator with prompts and alerts

Create variables for:
specialCharacters
lowercaseLetters
uppercaseLetters
numbers

Password length has to be 8-128 characters, so we have to assign a loop to handle not going over 128.

We have to create prompts and confirm if the user wants:
Lowercase, uppdercase, numbers, and/or special characters.

These will be ok(true/yes) or cancel(false/no) options: an alert will pop up after each choice confirming the choice.

userChoice Options:
userChoice hasSpecialCharacters
userChoice hasLowercaseLetters
userChoice hasUppercaseLetters
userChoice hasNumbers 
userChoice passwordLength

The user choice is entered into the code as true/false 
Then the code pulls one character from that bucket if true and nothing if false.

After each bucket is pulled from the number of characters is looked at and the rest of them are pulled from the LARGE bucket of all characters.

The password is generated when it meets the passwordLength and true/false responses from the user. 
Then the user is taken to the screen with their password.

The user has the option to start over and create another new password after this. 


