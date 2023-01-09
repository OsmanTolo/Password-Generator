// Array of special characters to be included in password
let specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
let numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
let lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
let upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

let passwordLength = 0;
let lowercaseChar = 0;
let uppercaseChar = 0;
let numericChar = 0;
let specialChar = 0;

// Function to prompt user for password options
function getPasswordLength() {
  let getPasswordLength = prompt(
    "How many characters long should the password be?"
  );
  passwordLength = parseInt(getPasswordLength);
  console.log(passwordLength);
  validatePasswordLength();
}

// Function to select character choice
function getCharacterChoice() {
  // a. Lowercase
  let getLowercaseOption = confirm(
    "Select OK to confirm if your password should include lowercase characters."
  );
  lowercaseChar = getLowercaseOption;
  console.log(`Lowercase Choice: ${lowercaseChar}`);

  // b. Uppercase
  let getUppercaseOption = confirm(
    "Select OK to confirm if your password should include uppercase characters."
  );
  uppercaseChar = getUppercaseOption;
  console.log(`Uppercase Choice: ${uppercaseChar}`);

  // c. Numeric
  let getNumericOption = confirm(
    "Select OK to confirm if your password should include numeric characters."
  );
  numericChar = getNumericOption;
  console.log(`Numeric Choice: ${numericChar}`);

  // d. Special
  let getSpecialOption = confirm(
    "Select OK to confirm if your password should include special characters ($@%&*, etc)?"
  );
  specialChar = getSpecialOption;
  console.log(`Special Choice: ${specialChar}`);
}

// Function to check length of password
function validatePasswordLength() {
  if (passwordLength < 10) {
    alert("Password should be at least 10 characters long.");
    getPasswordLength();
  } else if (passwordLength > 64) {
    alert("Password should not be more than 64 characters long.");
    getPasswordLength();
  } else {
    alert(`Your password will be ${passwordLength} characters long.`);
    getCharacterChoice();
  }
}

// Function for getting a random element from an array
function getRandom(arr) {
  return Math.floor(Math.random() * arr.length);
}

// Function to generate password with user input
function generatePassword() {
  let passwordArr = [];

  if (!lowercaseChar && !uppercaseChar && !numericChar && !specialChar) {
    // alert("At least one character type should be selected");
    passwordText.value = "";
    passwordText.style.borderColor = "red";
    passwordText.placeholder =
      "At least one character type should be selected to generate a viable password. Please try again!";
  } else {
    if (lowercaseChar) {
      passwordArr = passwordArr.concat(lowerCasedCharacters);
    }
    if (uppercaseChar) {
      passwordArr = passwordArr.concat(lowerCasedCharacters);
    }
    if (numericChar) {
      passwordArr = passwordArr.concat(numericCharacters);
    }
    if (specialChar) {
      passwordArr = passwordArr.concat(specialCharacters);
    }

    let randomPassword = "";
    for (let i = 0; i < passwordLength; i++) {
      randomPassword = randomPassword + passwordArr[getRandom(passwordArr)];
    }
  }

  return randomPassword;
}

// Get references to the #generate element
let generateBtn = document.querySelector("#generate");

// Add event listener to generate button and write password to the #password input
let passwordText = document.querySelector("#password");
generateBtn.addEventListener("click", function writePassword() {
  getPasswordLength();
  let password = generatePassword();

  passwordText.value = password;
});
