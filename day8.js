// 71.

// Given an array of integers arr, return the sum of all the integers that have an even index, multiplied by the integer at the last index.

// If the sequence is empty, you should return 0.

// Examples
function evenLast(arr) {
  // let result = 0
  // let lastElement = arr[arr.length - 1]
  // for(let i = 0 ; i < arr.length ; i++){
  //     if(i % 2 === 0){
  //         result += arr[i] * lastElement
  //     }
  // }
  // return result

  if (arr.length === 0) return 0;

  const lastElement = arr[arr.length - 1];

  return arr.reduce((sum, value, index) => {
    if (index % 2 === 0) {
      return sum + value * lastElement;
    }
    return sum;
  }, 0);
}
// console.log(evenLast([2, 3, 4, 5]), 30);
// numbers at even index = 2, 4
// number at last index = 5
// 2*5 + 4*5 = 10 + 20 = 30

// console.log(evenLast([1, 3, 3, 1, 10]), 140);

// console.log(evenLast([]), 0);

// 72.
// Write a function that takes an array of strings and a pattern (string) and returns the strings that contain the pattern in alphabetical order. If the pattern is an empty string, return all the strings passed in the input array.

// Examples
function cmsSelector(arr, char) {
  let result = arr.filter((word) => word.toLowerCase().includes(char));
  return result.sort();
}
// console.log( cmsSelector(["WordPress", "Joomla", "Drupal"], "w") , ["WordPress"]);

// console.log( cmsSelector(["WordPress", "Joomla", "Drupal", "Magento"], "ru") , ["Drupal"]);

// console.log( cmsSelector(["WordPress", "Joomla", "Drupal", "Magento"], "") , ["Drupal", "Joomla", "Magento", "WordPress"]);

// 73.
// Create a function that returns the average of a list composed of letters. First, find the number of the letter in the alphabet in order to find the average of the list.

// A = 1
// B = 2
// C = 3
// D = 4
// E = 5
// average = total sum of all numbers / number of item in the set
// Return the result rounded to two decimal points.

// Examples
function averageIndex(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += arr[i].toLowerCase().charCodeAt(0) - 97 + 1;
  }
  return parseFloat((result / arr.length).toFixed(2));
}
// console.log(averageIndex(["a", "b", "c", "i"]), 3.75);

// console.log(averageIndex(["e", "d", "a", "b", "i", "t"]), 6.83);

// console.log(
//   averageIndex([
//     "y",
//     "o",
//     "u",
//     "a",
//     "r",
//     "e",
//     "t",
//     "h",
//     "e",
//     "b",
//     "e",
//     "s",
//     "t",
//   ]),
//   12.62
// );

// 74.
// Wild Roger is tasked with shooting down 6 bottles with 6 shots as fast as possible. Here are the different types of shots he could make:

// He could use one pistol to shoot a bottle with a "Bang!" in 0.5 seconds.
// Or he could use both pistols at once with a "BangBang!" to shoot two bottles in 0.5 seconds.
// Given an array of strings, return the time (in seconds) it took to shoot down all 6 bottles. Make sure to only count Bangs and BangBangs. Anything else doesn't count.

// Examples
function rogerShots(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "Bang!" || arr[i] === "BangBang!") {
      result = result + 0.5;
    }
  }
  return result;
}
// console.log( rogerShots(["Bang!", "Bang!", "Bang!", "Bang!", "Bang!", "Bang!"]) , 3);

// console.log( rogerShots(["Bang!", "Bang!", "Bang!", "Bang!", "BangBang!"]) , 2.5);

// console.log( rogerShots(["Bang!", "BangBangBang!", "Boom!", "Bang!", "BangBang!", "BangBang!"]) , 2);

// 75.
// Create a function that takes a string str and returns an array of two-paired characters. If the string has an odd number of characters, add an asterisk * in the final pair.

// See the below examples for a better understanding:

// Examples
function stringPairs(str) {
  if (str.length % 2 !== 0) {
    str += "*";
  }
  let result = [];
  for (let i = 0; i < str.length; i += 2) {
    // let pair = str[i] + str[i+1]
    // result.push(pair)

    result.push(str.substring(i, i + 2));
  }
  return result;
}
// console.log(stringPairs("mubashir"), ["mu", "ba", "sh", "ir"]);

// console.log(stringPairs("edabit"), ["ed", "ab", "it"]);

// console.log(stringPairs("airforces"), ["ai", "rf", "or", "ce", "s*"]);

// 76.
// Create a function that takes a number (from 1 to 12) and returns its corresponding month name as a string. For example, if you're given 3 as input, your function should return "March", because March is the 3rd month.

// Number	Month Name
// 1: January,
// 2: February,
// 3: March,
// 4: April,
// 5: May,
// 6: June,
// 7: July,
// 8: August,
// 9: September,
// 10: October,
// 11: November,
// 12: December
// Examples

// let months = {
//   1: "January",
//   2: "February",
//   3: "March",
//   4: "April",
//   5: "May",
//   6: "June",
//   7: "July",
//   8: "August",
//   9: "September",
//   10: "October",
//   11: "November",
//   12: "December",
// };
// function monthName(number) {
//     return months[number]
// }

function monthName(monthNumber) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return months[monthNumber - 1];
}

// console.log(monthName(3), "March");

// console.log(monthName(12), "December");

// console.log(monthName(6), "June");

// 77.
// You are given an array with random words but your program doesn't accept words that begin with the capital letter "C". Remove the unaccepted words and return the new array.

// Examples
function accepted(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (!arr[i].includes("C")) {
      result.push(arr[i]);
    }
  }

  return result;
}
// console.log(accepted(["Ducks", "Bears", "Cats"]), ["Ducks", "Bears"]);

// console.log(
//   accepted(["cars", "trucks", "planes"], ["cars", "trucks", "planes"])
// );

// console.log(accepted(["Cans", "Worms", "Bugs", "Cold", "Beans"]), [
//   "Worms",
//   "Bugs",
//   "Beans",
// ]);

// 78.
// Given a sorted array of numbers, remove any numbers that are divisible by 13. Return the amended array.

// Examples
function unlucky13(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 13 !== 0) {
      result.push(arr[i]);
    }
  }
  return result;
}
// console.log( unlucky13([53, 182, 435, 591, 637]) , [53, 435, 591]);
// // 182 and 637 are divisible by 13.

// console.log( unlucky13([24, 316, 393, 458, 1279]) , [24, 316, 393, 458, 1279]);
// // No numbers in the array are divisible by 13.

// console.log( unlucky13([104, 351, 455, 806, 871]) , []);
// All numbers in the array are divisible by 13.

// 79.
// I am trying to filter out empty arrays from an array. In other words, I want to transform something that looks like this: ["a", "b", [], [], [1, 2, 3]] to look like ["a", "b", [1, 2, 3]]. My code looks like this:

function removeEmptyArrays(arr) {
  return arr.filter((x) => x != []).flat();
}
// However, somehow, the empty arrays still exist. Fix this incorrect code to remove the empty arrays.

// Examples
// What I want:
// console.log( removeEmptyArrays(["a", "b", []]) , ["a", "b"]);
// console.log( removeEmptyArrays([1, 2, [], 4]) , [1, 2, 4]);

// 80.
// Write a function that returns true if the product of an array is divisible by the sum of that same array. Otherwise, return false.

// Examples
function divisible(arr) {
  let sum = 0;
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    product *= arr[i];
    sum += arr[i];
  }
  if (product % sum === 0) {
    return true;
  }
  return false;
}
console.log(divisible([3, 2, 4, 2]), false);

console.log(divisible([4, 2, 6]), true);
// 4 * 2 * 6 / (4 + 2 + 6)

console.log(divisible([3, 5, 1]), false);
