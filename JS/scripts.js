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

let singleLetterString = "";      //to hold the new word if the sentence is a single letter
let stringArr = [];               //array to hold the string after splitting to individual words
let splitWordsArr = [];                 //empty array to hold the individual words
let multipleVowSent = "";         //variable to hold the new pig latin word that starts with a vowel
// let consonant = "";                //variable to hold the word without the first consonant
let multipleConsonant = "";           //variable to hold new pig latin word that starts with consonant

let firstConsonant = "";              //variable to hold the first consonant 

let pigLatinArray = "";          //variable that holds the new translated sentence

//<--------------FOR TRIAL 2------------------->
let wordOnlyArr = [];


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

function multipleWordString(string) {

  //This splits the sentence into an array of the constituent words
  let stringArr = string.split(" ");
  console.log(stringArr);

  //<------------------FOR LOOP-------------->
  //I would like to use for-loop to iterate through the sentence and further split each word into its own array so that i can access the first letter of the word (index 0), butwhen i console.log the array outside the for loop, it only brings the last output while map() method shows an array within an array (nested arrays).
  // for (let index = 0; index < stringArr.length; index++) {
  //   splitWordsArr = (stringArr[index]).split(",");
  //   console.log(splitWordsArr);

  //   //With each individual word, i will then loop to break down to individual letters but if i console.log outside the for loop, it only shows the last entry ['s', 'e', 'n', 't', 'e', 'n', 'c', 'e']
  //   for (let index = 0; index < splitWordsArr.length; index++) {
  //     wordOnlyArr = splitWordsArr[index].split("");
  //     console.log(wordOnlyArr);     //output ['E', 'n', 't', 'e', 'r'], ['a'], ['s', 'e', 'n', 't', 'e', 'n', 'c', 'e']
  //   }
  // }

  //<--------------------MAP METHOD-------------------->
  //using .map() to do this and return a new array with the array of split words. Returns a nested array.  To access elements of the inner array, i need to use two sets of square brackets

  splitWordsArr = stringArr.map(function(string) {
    return string.split("");
  });
console.log(splitWordsArr);

  console.log(splitWordsArr[0]);      //output ['E', 'n', 't', 'e', 'r']
  console.log(splitWordsArr[1]);      // output ['a']
  console.log(splitWordsArr[2]);      //output  ['s', 'e', 'n', 't', 'e', 'n', 'c', 'e']

  // console.log(splitWordsArr[0][0]);       //output E
  // console.log(splitWordsArr[1][0]);        //output a
  // console.log(splitWordsArr[2][0]);        //output s

  //This for-loop returns only the first word as enteray, three times, and that's because it has two for loops, so below i omit the second for-loop but keep the if-else statement
// for (let index = 0; index < splitWordsArr.length; index++) {
//   for (let index = 0; index < splitWordsArr[index].length; index++) {
//     if (/[aeiou]/i.test(splitWordsArr[index][index])) {
//       multipleVowSent = (splitWordsArr[index].join("")).concat("ay");
//       console.log(multipleVowSent);
//     } 
//   }
// }


//i realized using nested for-loops was only giving me one word thrice. so is used one for loop and an if-else statement. In the else section for words that start with consonants, i was wondering how to remove the first element. shift() method changes the array by removing the first element and returning it. so now idk why i didnt think of it but you can create a variable to store the removed element. 
for (let index = 0; index < splitWordsArr.length; index++) {
    if (/[aeiou]/i.test(splitWordsArr[index][index])) {
      multipleVowSent = (splitWordsArr[index].join("")).concat("ay");
      // console.log(multipleVowSent);
  } else {
    firstConsonant = (splitWordsArr[index]).shift();
    // console.log(firstConsonant);            //to store the first element of the split word, a consonant
    // console.log(splitWordsArr[index]);       //to check if the array of split words is changed; it is
    multipleConsonant= (splitWordsArr[index].join("")).concat(firstConsonant + "ay");
    // console.log(multipleConsonant);
  }
}
 pigLatinArray= multipleVowSent + " " + multipleConsonant;        //this only outputs the last word from the vowels and the last one for the consonant
 console.log(pigLatinArray);




}


let userSent = "Enter a sentence shall";
isAString(userSent);
singleLetter(userSent);
multipleWordString(userSent);


//Below, I have an array called charactersa and i want to get the first name so loop over peach character, split it based on the space and then get the zeroth index (which is the first name)
  // let firstNames = characters.map(function(character) {
        // character.name.split(" ")[0];
  // })

