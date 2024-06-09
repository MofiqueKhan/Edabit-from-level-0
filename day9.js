// 81.
// Write a function that searches an array of names (unsorted) for the name "Bob" and returns the location in the array. If Bob is not in the array, return -1.

// Examples
function findBob(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "Bob") {
      return i;
    }
  }
  return -1;
}
// console.log( findBob(["Jimmy", "Layla", "Bob"]) , 2);

// console.log( findBob(["Bob", "Layla", "Kaitlyn", "Patricia"]) , 0);

// console.log( findBob(["Jimmy", "Layla", "James"]) , -1);

// 82.
// Create a function that takes an array of numbers. Return the largest number in the array.

// Examples
function findLargestNum(arr) {
  // return Math.max(...arr)
  let maxNum = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxNum) {
      maxNum = arr[i];
    }
  }
  return maxNum;
}
// console.log( findLargestNum([4, 5, 1, 3]) , 5);

// console.log( findLargestNum([300, 200, 600, 150]) , 600);

// console.log( findLargestNum([1000, 1001, 857, 1]) , 1001);

// 83.
// You're in the midst of creating a typing game.

// Create a function that takes in two arrays: the array of user-typed words, and the array of correctly-typed words and outputs an array containing 1s (correctly-typed words) and -1s (incorrectly-typed words).

// Inputs:
// User-typed Array: ["cat", "blue", "skt", "umbrells", "paddy"]
// Correct Array: ["cat", "blue", "sky", "umbrella", "paddy"]

// Output: [1, 1, -1, -1, 1]
// Examples
function correctStream(arr1, arr2) {
  // let result = [];
  // for(let i = 0 ; i < arr2.length ; i++){
  //     if(arr2[i] === arr1[i]){
  //         result.push(1)
  //     }
  //     else{
  //         result.push(-1)
  //     }
  // }
  // return result

  return arr1.map((word, index) => (word === arr2[index] ? 1 : -1));
}
// console.log( correctStream(
//   ["it", "is", "find"],
//   ["it", "is", "fine"]
// ) , [1, 1, -1]);

// console.log( correctStream(
//   ["april", "showrs", "bring", "may", "flowers"],
//   ["april", "showers", "bring", "may", "flowers"]
// ) , [1, -1, 1, 1, 1]);

// 84.
// Create a function that returns the next element in an arithmetic sequence. In an arithmetic sequence, each element is formed by adding the same constant to the previous element.

// Examples
function nextElement(arr) {
  let diff = arr[1] - arr[0];
  return arr[arr.length - 1] + diff;
}
// console.log(nextElement([3, 5, 7, 9]), 11);

// console.log(nextElement([-5, -6, -7]), -8);

// console.log(nextElement([2, 2, 2, 2, 2]), 2);

// 85.
// Write a function that returns true if two rooks can attack each other, and false otherwise.

// Examples
function canCapture(arr) {
  const [rook1 , rook2] = arr
  const [col1, row1] = rook1.split('');
  const [col2, row2] = rook2.split('');

  return col1 === col2 || row1 === row2
 }

// console.log(canCapture(["A8", "E8"]), true);

// console.log(canCapture(["A1", "B2"]), false);

// console.log(canCapture(["H4", "H3"]), true);

// console.log(canCapture(["F5", "C8"]), false);

