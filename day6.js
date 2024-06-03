// 52.
// Given a letter and an array of words, return whether the letter does not appear in any of the words.

// Examples

function forbiddenLetter(letter, arr) {
  // for(let word of arr){
  //     if(word.includes(letter)){
  //         return false
  //     }
  // }
  // return true;
  return !arr.join("").includes(letter);
}

// console.log(forbiddenLetter("r", ["rock", "paper", "scissors"]), false);
// console.log(forbiddenLetter("a", ["spoon", "fork", "knife"]), true);
// console.log(forbiddenLetter("m", []), true);

// Notes
// All inputs given will be in lowercase.
// You will always be given a forbidden letter, but there may be empty arrays.

// 53.
// You are in charge of the cake for a child's birthday. You have decided the cake will have one candle for each year of their total age. They will only be able to blow out the tallest of the candles. Count how many candles are tallest.

// Examples
// The maximum height candles are four units high.
// There are two of them, so you return 2.
function birthdayCakeCandles(arr) {
  // let maxHeigth = Math.max(...arr)
  // let count = 0
  // for(let num of arr){
  //     if(num === maxHeigth){
  //         count++
  //     }
  // }
  // return count

  const maxHeight = Math.max(...arr);
  return arr.reduce((count, curr) => {
    return curr === maxHeight ? count + 1 : count;
  }, 0);
}
// console.log( birthdayCakeCandles([4, 4, 1, 3]) , 2);

// console.log( birthdayCakeCandles([3, 2, 1, 3]) , 2);

// console.log( birthdayCakeCandles([82, 49, 82, 82, 41, 82, 15, 63, 38, 25]) , 4);

// 54.
// Create a function that takes an array. This array will contain numbers represented as strings.

// Your function should split this array into two new arrays. The first array should contain only even numbers. The second only odd. Then, wrap these two arrays in one main array and return it.

// Return an empty array if there are no even numbers, or odd.

// Examples
function cleanUpArray(arr) {
  let even = [];
  let odd = [];
  let coercedArr = arr.map((e) => +e);
  coercedArr.filter((e) => (e % 2 === 0 ? even.push(e) : odd.push(e)));
  return [even, odd];
}
// console.log( cleanUpArray(["8"]) , [[8], []]);

// console.log( cleanUpArray(["11"]) , [[], [11]]);

// console.log( cleanUpArray(["7", "4", "8"]) , [[4, 8], [7]]);

// console.log( cleanUpArray(["9", "4", "5", "8"]) , [[4, 8], [9, 5]]);

// 55.
// Create a function that takes two arguments of an array of numbers arr and a constant number n and returns the n largest numbers from the given array.

// Examples
function largestNumbers(num, arr) {
  if (num === 0) {
    return [];
  }
  return arr
    .sort((a, b) => b - a)
    .slice(0, num)
    .sort((a, b) => a - b);
}
// console.log(largestNumbers(2, [4, 3, 2, 1]), [3, 4]);

// console.log(largestNumbers(1, [7, 19, 4, 2]), [19]);

// console.log(largestNumbers(3, [14, 12, 57, 11, 18, 16]), [16, 18, 57]);

// console.log(largestNumbers(0, [1, 3, 4, 2]), []);

// 56.
// Create a function that finds each factor of a given number n. Your solution should return an array of the number(s) that meet this criteria.

// Examples
function findFactors(num) {
  let factor = [];
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      factor.push(i);
    }
  }
  return factor;
}
// console.log( findFactors(9) , [1, 3, 9]);
// // 9 has three factors 1, 3 and 9

// console.log( findFactors(12) , [1, 2, 3, 4, 6, 12]);

// console.log( findFactors(20) , [1, 2, 4, 5, 10, 20]);

// console.log( findFactors(0) , []);
// 0 has no factors

// 57.
// Given an array of numbers, remove the largest and smallest numbers, and calculate the average of the remaining numbers.

// Examples
function trimmedAverages(arr) {
  if (arr.length <= 2) {
    return 0;
  }
  arr.sort((a, b) => a - b);
  arr.pop();
  arr.shift();
  const sum = arr.reduce((acc, curr) => acc + curr, 0);
  const average = sum / arr.length;
  return average;
}
// console.log(trimmedAverages([4, 5, 7, 100]), 6);
// // Average of 5 and 7

// console.log(trimmedAverages([10, 25, 5, 15, 20]), 15);
// // Average of 10, 15 and 20

// console.log(trimmedAverages([1, 1, 1]), 1);
// 1

// 58.
// In mathematics, an Arithmetic Progression (AP) is a sequence of numbers such that the difference between the consecutive terms is constant. Create a function that takes three arguments:

// First element of the sequence first
// Constant difference between the elements diff
// Total numbers in the sequence n
// Return the first n elements of the sequence with the given common difference diff. The final result should be a string of numbers, separated by comma and space.

// Examples

function arithmeticProgression(start, diff, n) {
  let progression = [];

  for (let i = 0; i < n; i++) {
    progression.push(start + i * diff);
  }

  return progression.join(", ");
}
// console.log( arithmeticProgression(1, 2, 5) , "1, 3, 5, 7, 9");

// console.log( arithmeticProgression(1, 0, 5) , "1, 1, 1, 1, 1");

// console.log( arithmeticProgression(1, -3, 10) , "1, -2, -5, -8, -11, -14, -17, -20, -23, -26");

// 59.

// Given an array of numbers, return true if the sum of the array is less than 100; otherwise return false.

// Examples
function arrayLessThan100(arr) {
  // let a =  arr.reduce((acc , curr)=> acc + curr,0)
  // if(a < 100){
  //   return true
  // }
  // return false
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum <= 100;
}
console.log(arrayLessThan100([5, 57]), true);

console.log(arrayLessThan100([77, 30]), false);

console.log(arrayLessThan100([0]), true);
