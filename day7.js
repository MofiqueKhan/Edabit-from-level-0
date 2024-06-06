// 61.
// Create a function that takes a 2D array arr and returns the sum of the minimum value in each row.

// Examples
function sumMinimums(arr) {
  const arr1 = arr[0].sort((a, b) => a - b);
  const arr2 = arr[1].sort((a, b) => a - b);
  const arr3 = arr[2].sort((a, b) => a - b);

  let result = arr1[0] + arr2[0] + arr3[0];

  return result;
}
// console.log( sumMinimums([
//   [1, 2, 3, 4, 5],
//   [5, 6, 7, 8, 9],
//   [20, 21, 34, 56, 100]
// ]) , 26);

// minimum value of the first row is 1
// minimum value of the second row is 5
// minimum value of the third row is 20

// 62.
// Create a function that determines the age difference between spouses in a household. The ages ages in years of the parents and their children are given in an array.

// If there is no difference in age between the parents, return "No age difference between spouses.". Otherwise, return the difference in years. Check the examples for more clarification.

// Examples
function ageDifference(arr) {
  let sortedArr = arr.sort((a, b) => b - a);
  if (sortedArr[0] === sortedArr[1]) {
    return "No age difference between spouses.";
  }
  return sortedArr[0] - sortedArr[1] === 1
    ? "1 year"
    : sortedArr[0] - sortedArr[1] + " " + "years";
  //   second approach
  // arr.sort((a, b) => b - a);
  // let [parent1, parent2] = arr;
  // let diff = parent1 - parent2;
  // if (diff === 0) {
  //     return "No age difference between spouses.";
  // } else if (diff === 1) {
  //     return "1 year";
  // } else {
  //     return `${diff} years`;
  // }
}

// console.log(ageDifference([29, 1, 6, 8, 28]), "1 year");

// console.log(
//   ageDifference([43, 86, 49, 86]),
//   "No age difference between spouses."
// );

// console.log(ageDifference([2, 4, 6, 32, 27]), "5 years");
// Notes
// Note the singular "year".
// The younger spouse (if the spouses are not the same age) will be older than their oldest child by a minimum of 20 years.
// The age difference between spouses will not be more than 18 years.

// 63.
// Given an array of either entirely odd integers or entirely even integers except for a single Outlier Number, create a function to return this number.

// Examples
function outlierNumber(arr) {
  if (arr.length >= 3) {
    let odd = [];
    let even = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        even.push(arr[i]);
      } else {
        odd.push(arr[i]);
      }
    }
    return odd.length > even.length ? Number(even) : Number(odd);
  }
}
// console.log(outlierNumber([2, 3, 4]), 3);
// // 2 and 4 are even numbers.
// // 3 is an outlier number.

// console.log(outlierNumber([1, 2, 3]), 2);

// console.log(outlierNumber([4, 1, 3, 5, 9]), 4);
// Notes
// Array size will always be >= 3.

// 64.
// In the Code tab is a function which is meant to return how many uppercase letters there are in a list of various words. Fix the list comprehension so that the code functions normally!

// Examples
function countUppercase(arr) {
  let result = 0;
  for (let word of arr) {
    for (let char of word) {
      if (char >= "A" && char <= "Z") {
        result++;
      }
    }
  }
  return result;
}
// console.log( countUppercase(["SOLO", "hello", "Tea", "wHat"]) , 6);

// console.log( countUppercase(["little", "lower", "down"]) , 0);

// console.log( countUppercase(["EDAbit", "Educate", "Coding"]) , 5);
// Notes
// Check the Resources for some array methods that might be helpful.
// This is originally a loose translation of a Python problem. However, the Pythonic List Comprehension syntax was never really adopted in JavaScript, so I elected to make our Uppercase counter broken in a few other ways.
// A lot of people (including me!) have rewritten the function entirely. I'm gonna make an executive decision and say that's fine here (even though complete rewrites are generally not a good idea!).

// 65.
// Given an array with an even amount of numbers, return true if the sum of two numbers in the array is even and false if the sum of two numbers in the array is odd.

// To illustrate:

// 11, 15, 6, 8, 9, 10
// 11 + 15 = 26 = true
// 15 + 6 = 21 = false
// 6 + 8 = 14 = true
// 8+ 9 = 17 = false
// 9 + 10 = 19 = false
// Therefore, solution = [true, false, true, false, false]
// Examples
function oddSum(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let sum = arr[i] + arr[i + 1];
    result.push(sum % 2 === 0);
  }
  return result;
}
// console.log(oddSum([11, 15, 6, 8, 9, 10]), [true, false, true, false, false]);

// console.log(oddSum([12, 21, 5, 9, 65, 32]), [false, true, true, true, false]);

// console.log(oddSum([1, 2, 3, 4, 5, 6]), [false, false, false, false, false]);
// Notes
// Remember that the length of all the arrays will be an even number, so it is not necessary to measure lengths.

// 66.
// Create a function that takes an array arr of numbers and moves all zeros to the end, preserving the order of the other elements.

// Examples
function moveZeros(arr) {
  let result = [];
  let zeros = 0;
  for (let i = 0; i < arr.length; i++) {
    arr[i] !== 0 ? result.push(arr[i]) : zeros++;
  }

  for (let i = 0; i < zeros; i++) {
    result.push(0);
  }
  return result;
}
// console.log( moveZeros([1, 0, 1, 2, 0, 1, 3]) , [1, 1, 2, 1, 3, 0, 0]);

// console.log( moveZeros([0, 1, null, 2, false, 1, 0]) , [1, null, 2, false, 1, 0, 0]);

// console.log( moveZeros(['a', 0, 0, 'b', 'c', 'd', 0, 1, 0, 1, 0, 3, 0, 1, 9, 0, 0, 0, 0, 9]) , ['a', 'b', 'c', 'd', 1, 1, 3, 1, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

// 67.
// Given a 2D-list of letters arr and a list of indexes idx, find the letters on given indexes and return as a string.

// You have to find the characters in these indexes of the given list if you think of the indexes as:
function arrIndex(arr, idx) {
  let flatList = [];
  for (let row of arr) {
    flatList = flatList.concat(row);
  }
  let zeroBasedIndexes = idx.map((i) => i - 1);
  let characters = zeroBasedIndexes.map((i) => flatList[i]);
  return characters.join("");
}
const arr = [
  ["m", "u", "b"],
  ["a", "s", "h"],
  ["i", "r", "1"],
];

const idx = [1, 3, 5, 8];

// console.log(arrIndex(arr, idx), "mbsr");

// 68.
// Create a function to calculate how many characters in total are needed to make up the shape. You will be given an array of strings which make up a shape in the compiler (i.e. a square, a rectangle or a line).

// Examples
function countCharacters(arr){
  let result = 0;
  for(let words of arr){
    for(let char of words){
      result++
    }
  }
  return result
}
// console.log(countCharacters(["###", "###", "###"]), 9);

// console.log(countCharacters(["22222222", "22222222"]), 16);

// console.log(countCharacters(["------------------"]), 18);

// console.log(countCharacters([]), 0);

// console.log(countCharacters(["", ""]), 0);

// 69.
// Create a function that takes an array of numbers nums as an argument. Square each number in the array if the number is even and square root √ the number if it is odd. Return the sum of the new array rounded to two decimal places.

// Example:

 // [2, 4, 9]  , 23
// 2 ^ 2 + 4 ^ 2 + √9 = 4 + 16 + 3 = 23
// Examples
function arraySum(arr){
  let result = 0;
  for(let i = 0 ; i < arr.length ; i++){
    if(arr[i] % 2 === 0){
      result += Math.pow(arr[i] , 2)
    }
    else{
      result += Math.sqrt(arr[i])
    }
  }
  return parseFloat(result.toFixed(2))
}
// console.log(arraySum([1, 3, 3, 1, 10]) , 105.46);

// console.log(arraySum([2, 3, 4, 5]) , 23.97);

// console.log(arraySum([1, 31, 3, 11, 0]) , 11.62);

// 70.
// Create a function that returns the original value from a matrix with too many sub-arrays.

// Examples
function deNest(arr){
  return arr.flat(Infinity).pop()
}
// console.log( deNest([[[[[[[[[[[[3]]]]]]]]]]]]) , 3);

// console.log( deNest([[[[[[[true]]]]]]]) , true);

// console.log( deNest([[[[[[[[[[[[[[[[["edabit"]]]]]]]]]]]]]]]]]) , "edabit");

