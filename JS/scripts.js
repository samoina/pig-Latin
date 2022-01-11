//<-------------------For the leap year task-------------->

let yesYear = "Woopsie, this is a leap year";
let noYear = "Noppity, this is not a leap year"

let isLeapYear;

function leapYear(year) {
  if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
    isLeapYear = yesYear;
    console.log(isLeapYear);
  } else {
    isLeapYear = noYear;
    console.log(isLeapYear);
  }
}

// let userYear = parseInt(prompt("Enter any year to find out if it is a leap year"));
let userYear = 1999;

leapYear(userYear);

let userInput = document.getElementById("input");
userInput.innerHTML = userYear;

let userOutput = document.getElementById("output");
userOutput.innerHTML = isLeapYear;

//<---------------Pig Latin Translator------------>
//Algorithmic thinking
//1. The input to be tested must be a valid string
//2. it should have alphabetical characters
//3. add -ay to single letter words that start with a vowel
//4. if the first letter of the word is [aeiou] add -ay to the end of the word
//so if (/[aeiou]/i.test(word[0]) add -ay to the end
//5. if first letter of the word is NOT a vowel, take it and add ay at the end
// so if you have send, it will be endSay. 
//6. Create a basic function that accepts user input, and displays output. This will allow us to manually test each spec.

//error messages to display if the string is not valid

const notAValidString = "This is not a valid string. Please enter one with alphabetical characters";

const zeroLengthString = "This string is empty. Please enter one or more alphabetical characters.";

const noAlphabeticalChar = "This string contains non-alphabetical characters. Enter one or more alphabetical characters";

let singleLetterString = "";

//Helper function to determine if the string is a valid one

function isAString(string) {
  if (typeof string !== "string") {
    return notAValidString;
  } else
    if (string.length === 0) {
      return zeroLengthString;
    } else if (/[aeiou]/i.test(string) === false) {
      return noAlphabeticalChar;
    } else {
      return "This is a valid string";
    }
}

//helper function that adds -ay to single letter entries.

function singleLetter(string) {
  if (string.length===1) {
    singleLetterString = string.concat("ay");
    console.log(singleLetterString);
  }
}

  let userSent = prompt("Enter a sentence to translate to Pig Latin");
  isAString(userSent);
  singleLetter(userSent);