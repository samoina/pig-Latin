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

//error messages to display if the string is not valid

const notAValidString = "This is not a valid string. Please enter one with alphabetical characters";

const zeroLengthString = "This string is empty. Please enter one or more alphabetical characters.";

const noAlphabeticalChar = "This string contains non-alphabetical characters. Enter one or more alphabetical characters";

let singleLetterString = "";      //to hold the new word if the sentence is a single letter
let stringArr = [];               //array to hold the string after splitting to individual words
let splitWordsArr = [];                 //empty array to hold the individual words
let multipleVowSent = "";         //variable to hold the new pig latin word that starts with a vowel
// let consonant = "";                //variable to hold the word without the first consonant
let multipleConsonant = "";           //variable to hold new pig latin word that starts with consonant

let firstConsonant = "";              //variable to hold the first consonant 

let pigLatinArray = "";          //variable that holds the new translated sentence

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
  if (string.length === 1) {
    singleLetterString = string.concat("ay");
    console.log(singleLetterString);
  } else {
    return string;
  }
}



