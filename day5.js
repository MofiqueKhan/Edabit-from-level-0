// 40.
// Create a function that returns the selected filename from a path. Include the extension in your answer.

// Examples
function getFilename(str) {
  return str.split("/").pop();
}
// console.log( getFilename("C:/Projects/pil_tests/ascii/edabit.txt") , "edabit.txt");

// console.log( getFilename("C:/Users/johnsmith/Music/Beethoven_5.mp3") , "Beethoven_5.mp3");

// console.log( getFilename("ffprobe.exe") , "ffprobe.exe");

// 41.
// Write a function that takes an array of drinks and returns an array of only drinks with no sugar in them. Drinks that contain sugar (in this challenge) are:

// cola
// fanta
// Examples
function skipTooMuchSugarDrinks(arr) {
  return arr.filter((drink) => drink !== "fanta" && drink !== "cola");
}
// console.log( skipTooMuchSugarDrinks(["fanta", "cola", "water"]) , ["water"]);

// console.log( skipTooMuchSugarDrinks(["fanta", "cola"]) , []);

// console.log( skipTooMuchSugarDrinks(["lemonade", "beer", "water"]) , ["lemonade", "beer", "water"]);

// 42.

// Given an array of numbers, create a function which returns the same array but with each element's index in the array added to itself. This means you add 0 to the number at index 0, add 1 to the number at index 1, etc...

// Examples
function addIndexes(arr) {
  let index = 0;
  return arr.map((e) => e + index++);
}
// console.log( addIndexes([0, 0, 0, 0, 0]) , [0, 1, 2, 3, 4]);

// console.log( addIndexes([1, 2, 3, 4, 5]) , [1, 3, 5, 7, 9]);

// console.log( addIndexes([5, 4, 3, 2, 1]) , [5, 5, 5, 5, 5]);

// 43.
// Create a function that returns an array of all the integers between two given numbers start and end.

// Examples
function rangeOfNum(num1, num2) {
  let result = [];
  for (let i = num1 + 1; i < num2; i++) {
    result.push(i);
  }
  return result;
}
// console.log( rangeOfNum(2, 4) , [3]);

// console.log( rangeOfNum(5, 9) , [6, 7, 8]);

// console.log( rangeOfNum(2, 11) , [3, 4, 5, 6, 7, 8, 9, 10]);

// 44.
// Write a function that returns the sum of elements greater than 5, in the given array .

// Examples
function sumFive(arr) {
  // return arr.reduce((acc , curr) => curr > 5 ? acc + curr : acc , 0)
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 5) {
      result += arr[i];
    }
  }
  return result;
}
// console.log( sumFive([1, 5, 20, 30, 4, 9, 18]) , 77);

// console.log( sumFive([1, 2, 3, 4]) , 0);

// console.log( sumFive([10, 12, 28, 47, 55, 100]) , 252);

// 45.
// Create a function that takes an array of strings and numbers, and filters out the array so that it returns an array of integers only.

// Examples
function filterArray(arr) {
  // return arr.filter((e)=> Number.isInteger(e))
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (Number.isInteger(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}
// console.log(filterArray([1, 2, 3, "a", "b", 4]), [1, 2, 3, 4]);

// console.log(filterArray(["A", 0, "Edabit", 1729, "Python", "1729"]), [0, 1729]);

// console.log(filterArray(["Nothing", "here"]), []);

// 46.
// In mathematics and digital electronics, a binary number is a number expressed in the base-2 numeral system or binary numeral system. Given an array of ones and zeroes of a binary number, return the equivalent decimal value.

// Examples
function binaryToDecimal(arr) {
  let result = arr.join("");
  return parseInt(result, 2);
}
// console.log( binaryToDecimal([0, 0, 0, 1]) , 1);

// console.log( binaryToDecimal([0, 0, 1, 0]) , 2);

// console.log( binaryToDecimal([1, 1, 1, 1, 1, 0, 1, 1, 0, 1]) , 1005);

// 47.
// The insurance guy calls again. Apparently, they were informed by your spouse that some items were not stolen at all and you failed to mention this detail to them. This is a fraud attempt! You freeze and mumble something unintelligible. Find out what you said.

// Given an object, return a string that concatenates all the values and adds the 2nd key at the end. Make sure you keep an empty space between them but not at the beginning or end of the string. Look at the examples for a clearer picture.

// Examples
let obj1 = { 1: "Mommy", 2: "please", 3: "help" }; // "Mommy please help please"
let obj2 = { 1: "Me", 2: "innocent", 3: "is" }; // "Me innocent is innocent"
let obj3 = { 1: "Must", 2: "lawyer", 3: "call" }; // "Must lawyer call lawyer"
function fn(obj) {
  return Object.values(obj).join(" ") + " " + Object.values(obj)[1];
}
// console.log(fn(obj1));
// console.log(fn(obj2));
// console.log(fn(obj3));

// 48.
// Create a function that returns an array of booleans from a given number by iterating through the number one digit at a time and appending true into the array if the digit is 1 and false otherwise.

// Examples
function integerBoolean(str) {
  return str.split("").map((e) => e != false);
}
// console.log( integerBoolean("100101") , [true, false, false, true, false, true]);

// console.log( integerBoolean("10") , [true, false]);

// console.log( integerBoolean("001") , [false, false, true]);

// 49.
// According to the lodash documentation, _.fill Fills elements of an array with the value from start to, but not including, end. Note that this method mutates the array.

// This challenge requires you to write your own version of this function without using lodash so that you can better understand it works.

// Arguments
// array (Array): The array to fill.
// value (*): The value to fill array with.
// [start=0] (number): The start position.
// [end=array.length] (number): The end position.
// Returns
// (Array): Returns array.
// Examples
var array = [1, 2, 3];

function fill(array, value, start = 0, end = array.length) {
  // Ensure start is at least 0
  start = Math.max(start, 0);
  console.log(start);
  // Ensure end does not exceed array length
  end = Math.min(end, array.length);
  console.log(end);

  // Fill the array from start to end (not including end)
  for (let i = start; i < end; i++) {
    array[i] = value;
  }

  // Return the modified array
  return array;
}
// console.log(fill(array, "a"), ["a", "a", "a"]);

// console.log(fill(Array(3), 2), [2, 2, 2]);

// console.log(fill([4, 6, 8, 10], "*", 1, 3), [4, "*", "*", 10]);

// 50.
// Write a function that accepts the width and height (m, n) and an optional proc s and generates an array with m elements. Each element is a string consisting of either:

// The default character (hash #) repeating n times (if no proc is given).
// The character passed in through the proc repeating n times.
// Examples
function makeRug(num1, num2, symbol = "#") {
  // return new Array(m).fill(symbol.repeat(n));

  let result = [];
  for (let i = 0; i < num1; i++) {
    result.push(symbol.repeat(num2));
  }
  return result;
}

// console.log(makeRug(3, 5), ["#####", "#####", "#####"]);

// console.log(makeRug(3, 5, "$"), ["$$$$$", "$$$$$", "$$$$$"]);

// console.log(makeRug(2, 2, "A"), ["AA", "AA"]);

// 51.
// Create a function that takes a year as an argument and returns the corresponding Chinese zodiac.

// Examples
function chineseZodiac(birthyear) {
  const zodiac = [
    "Rat",
    "Ox",
    "Tiger",
    "Rabbit",
    "Dragon",
    "Snake",
    "Horse",
    "Goat",
    "Monkey",
    "Rooster",
    "Dog",
    "Pig",
  ];
  const index = (birthyear - 1924) % 12;

  return zodiac[index];
}
console.log(chineseZodiac(2021), "Ox");

console.log(chineseZodiac(2020), "Rat");

console.log(chineseZodiac(1933), "Rooster");

