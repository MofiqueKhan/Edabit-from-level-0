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
  return arr.sort((a, b) => b - a).slice(0, num);
}
console.log(largestNumbers(2, [4, 3, 2, 1]), [3, 4]);

console.log(largestNumbers(1, [7, 19, 4, 2]), [19]);

console.log(largestNumbers(3, [14, 12, 57, 11, 18, 16]), [16, 18, 57]);

console.log(largestNumbers(0, [1, 3, 4, 2]), []);
