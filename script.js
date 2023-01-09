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
let passwordArr = [];

// Function to prompt user for password options
function getPasswordOptions() {
  /** 1) Length of password */
  let getPasswordLength = prompt(
    "How many characters long should the password be?"
  );
  passwordLength = parseInt(getPasswordLength);
  console.log(passwordLength);
  validatePasswordLength();
}

// Function to select character choice
function characterChoice() {
  // a. Lowercase
  let getLowercaseOption = prompt(
    "Do you want your password to include lowercase characters?"
  );
  let lowercaseChoice = getLowercaseOption.toLowerCase();
  console.log(`Lowercase Choice: ${lowercaseChoice}`);

  // b. Uppercase
  let getUppercaseOption = prompt(
    "Do you want your password to include uppercase characters?"
  );
  let uppercaseChoice = getUppercaseOption.toLowerCase();
  console.log(`Uppercase Choice: ${uppercaseChoice}`);

  // c. Numeric
  let getNumericOption = prompt(
    "Do you want your password to include numbers?"
  );
  let numericChoice = getNumericOption;
  console.log(`Numeric Choice: ${numericChoice}`);

  // d. Special
  let getSpecialOption = prompt(
    "Do you want your password to include special characters ($@%&*, etc)?"
  );
  let specialChoice = getSpecialOption;
  console.log(`Special Choice: ${specialChoice}`);
}

// Function to check length of password
function validatePasswordLength() {
  if (passwordLength < 10) {
    alert("Password should be at least 10 characters long.");
    getPasswordOptions();
  } else if (passwordLength > 64) {
    alert("Password should not be more than 64 characters long.");
    getPasswordOptions();
  } else {
    characterChoice();
  }
}

// Function for getting a random element from an array
function getRandom(arr) {
  return Math.floor(Math.random() * arr.length);
}

// Function to generate password with user input
function generatePassword() {}

// Get references to the #generate element
let generateBtn = document.querySelector("#generate");

// Add event listener to generate button and write password to the #password input
generateBtn.addEventListener("click", function writePassword() {
  getPasswordOptions();
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
});
