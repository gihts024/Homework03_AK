// Assignment Code
var generateBtn = document.querySelector("#generate");
var letters= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var sLetters= "abcdefghijklmnopqrstuvwxyz";
var integers = "1234567890";
var specialChar = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var x = window.prompt("Enter the number of characters you want on password between 8 and 126");
var passLength = parseInt (x);
var AllConditions =letters+sLetters+integers+specialChar;
var checkedConditions = [];
   

// Prompt the password Length

function passLengthPrompt() {

  // window.alert("Select Characters you would want in your password:" );
 
  // If the user decides not to enter the prompt ends.


  if (!passLength) {
    window.prompt("This must be a number between 8 and 126!");
  }
  if (passLength < 8){
    prompt("Please enter a number bigger than 8");

  }
  else if (passLength > 126) { 
    prompt("Your password must be less than 126 characters");
 
  } else {
   
    return passLength;
  }
  alert("Select Characters you would want in your password:" );
  console.log(passLength);
};

//Fulfill the checked conditions by Selecting the checkboxes

 function checkedItems() {
  var A = document.getElementById("lowercase").checked = true;
  var B = document.getElementById("uppercase").checked = true;
  var C= document.getElementById("numeric").checked = true;
  var D = document.getElementById("specialChar").checked = true;


  if (A ==true) {
    checkedConditions = sLetters;
  
  } if (B == true) {
    checkedConditions = letters;
  } if (C == true) {
    checkedConditions = integers;

  } if (D==true) {
    checkedConditions = specialChar;

  } if (A && B && C && D=== true ) {
    checkedConditions = AllConditions;
  }
// Set conditions for the selection of password elements
  if (lowercase, uppercase, numeric && specialChar ===null){
    window.prompt("you must select at least one");
    return;
  }
  else if ((lowercase || uppercase || numeric || special ===true)){
    return checkedItems;
  }

}
console.log(checkedConditions);

// Write password to the #password input

passLengthPrompt();
checkedItems();
console.log(passLength);
console.log(checkedConditions);



function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
      function generatePassword (){
        var generatedPassword = "";
        for (var i = 0; i < passLength; i++) {
          generatedPassword = generatedPassword + checkedConditions[Math.floor(Math.random() * checkedConditions.length)];
          console.log(generatedPassword)
        }
        return generatedPassword;
      
    }
}

generateBtn.addEventListener("click", writePassword);



      
