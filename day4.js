// 34.
// You can assign variables from nested arrays like this:

const arr = ["cars", "planes", ["trains", ["motorcycles"]]];

// let trans1 = arr[0]
// let trans2 = arr[1]
// let trans3 = arr[2][0]
// let trans4 = arr[2][1][0]

let [trans1, trans2, trans3, trans4] = arr;

// console.log(trans1) // outputs "cars"
// console.log(trans2) // outputs "planes"
// console.log(trans3) // outputs "trains"
// console.log(trans4) // outputs "motorcycles"

// 35.

// Create a program that will take two arrays of integers, a and b. Each array will consist of 3 positive integers, representing the dimensions of cuboids a and b. Find the difference of the cuboids' volumes.

// For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.

// Examples
function findDifference(arr1, arr2) {
  let result =
    arr1.reduce((acc, curr) => acc * curr, 1) -
    arr2.reduce((acc, curr) => acc * curr, 1);
  return Math.abs(result);
}
// console.log( findDifference([ 28, 16, 29 ], [ 7, 8, 17 ]) , 12040);

// console.log( findDifference([ 9, 22, 18 ], [ 16, 24, 10 ]) , 276);

// console.log( findDifference([ 1, 9, 25 ], [ 10, 7, 9 ]) , 405);

// console.log( findDifference([ 7, 6, 16 ], [ 26, 9, 26 ]) , 5412);

// 36.
// Create a function that takes an array and returns the sum of all numbers in the array.

// Examples
function getSumOfItems(arr) {
  return arr.reduce((acc, curr) => (acc += curr));
}
// console.log( getSumOfItems([2, 7, 4]) , 13);

// console.log( getSumOfItems([45, 3, 0]) , 48);

// console.log( getSumOfItems([-2, 84, 23]) , 105);

// 37.
// Given an array of integers, determine whether the sum of its elements is even or odd.

// The return value should be a string ("odd" or "even").

// If the input array is empty, consider it as an array with a zero ([0]).

// Examples
function evenOrOdd(arr) {
  let result = arr.reduce((acc, curr) => (acc += curr), 0);
  return result % 2 === 0 ? "even" : "odd";
}
// console.log( evenOrOdd([0]) , "even");

// console.log( evenOrOdd([1]) , "odd");

// console.log( evenOrOdd([]) , "even");

// console.log( evenOrOdd([0, 1, 5]) , "even");

// 38.

// Create a function that takes an array of numbers arr and returns an inverted array.

// Examples
function invertArray(arr) {
  return arr.map((num) => num * -1);
}
// console.log( invertArray([1, 2, 3, 4, 5]) , [-1, -2, -3, -4, -5]);

// console.log( invertArray([1, -2, 3, -4, 5]) , [-1, 2, -3, 4, -5]);

// console.log( invertArray([]) , []);

// 39.

// Given an array, rotate the values clockwise by one (the last value is sent to the first position).

// Check the examples for a better understanding.

// Examples
function rotateByOne(arr) {
  const lastElement = arr.pop();
  arr.unshift(lastElement);
  return arr;
}
// console.log(rotateByOne([1, 2, 3, 4, 5]), [5, 1, 2, 3, 4]);

// console.log(rotateByOne([6, 5, 8, 9, 7]), [7, 6, 5, 8, 9]);

// console.log(rotateByOne([20, 15, 26, 8, 4]), [4, 20, 15, 26, 8]);
