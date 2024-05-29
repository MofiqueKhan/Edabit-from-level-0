//6.
// Help fix all the bugs in the function incrementItems! It is intended to add 1 to every element in the array!

// Examples
// function incrementItems(arr){
//     return arr.map((i)=>i+1)
// }

function incrementItems(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i] + 1);
  }
  return result;
}
// console.log( incrementItems([0, 1, 2, 3]) , [1, 2, 3, 4]);

// console.log( incrementItems([2, 4, 6, 8]) , [3, 5, 7, 9]);

// console.log( incrementItems([-1, -2, -3, -4]) , [0, -1, -2, -3]);

// 7.
// You can assign variables from arrays like this:

const arr = [1, 2, 3, 4, 5, 6];
// let a = arr[0]
// let b = arr[1]

let [a, b, c] = arr;

// console.log(a) // outputs 1
// console.log(b) // outputs 2
// console.log(c) // outputs 3
// With ES6, you can assign variables from arrays in a much more succinct way. Create variables a and b from the given array using the ES6 destructuring assignment syntax, where a === 1 and b === 2.

// 8.
// Create a function that accepts an array and returns the last item in the array.

// Examples
// function getLastItem(arr){
//     return arr[arr.length - 1]
// }

function getLastItem(arr) {
  return arr.pop();
}
// console.log( getLastItem([1, 2, 3]) , 3);

// console.log( getLastItem(["cat", "dog", "duck"]) , "duck");

// console.log( getLastItem([true, false, true]) , true);

// 9.

// Create a function that takes an array of numbers or letters and returns a string.

// Examples

// Using join Method:

// join is an array method that concatenates all the elements of an array into a single string. By default, it uses a comma as a separator, but if you provide an empty string '' as the separator, it will concatenate all the elements without any separator.
// function arrayToString(arr){
//     return arr.join("")
// }

// using for loop

function arrayToString(arr) {
  let result = "";
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  return result;
}
// console.log( arrayToString([1, 2, 3, 4, 5, 6]) , "123456");

// console.log( arrayToString(["a", "b", "c", "d", "e", "f"]) , "abcdef");

// console.log( arrayToString([1, 2, 3, "a", "s", "dAAAA"]) , "123asdAAAA");

// 10.

// Create a function to concatenate two integer arrays.

// Examples
// using for loop
// function concat(arr1 , arr2){
//     for(let i = 0 ; i < arr2.length ; i++){
//         arr1.push(arr2[i])
//     }
//     return arr1
// }

// using concat method

function concat(arr1, arr2) {
  return arr1.concat(arr2);
}
// console.log( concat([1, 3, 5], [2, 6, 8]) , [1, 3, 5, 2, 6, 8]);

// console.log( concat([7, 8], [10, 9, 1, 1, 2]) , [7, 8, 10, 9, 1, 1, 2]);

// console.log( concat([4, 5, 1], [3, 3, 3, 3, 3]) , [4, 5, 1, 3, 3, 3, 3, 3]);

// 11.
// Create a function that takes an array and a string as arguments and returns the index of the string.

// Examples
// uding indexOf() method

// function findIndex(arr , index){
//     return arr.indexOf(index)
// }

function findIndex(arr, index) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === index) {
      return i;
    }
  }
}

// console.log( findIndex(["hi", "edabit", "fgh", "abc"], "fgh") , 2);

// console.log( findIndex(["Red", "blue", "Blue", "Green"], "blue") , 1);

// console.log( findIndex(["a", "g", "y", "d"], "d") , 3);

// console.log( findIndex(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple") , 0);

// 12.
// Given an index and an array, return the value of the array with the given index.

// Examples

// using for loop

// function valueAt(arr , index){
//     for(let i = 0 ; i < arr.length ; i++){
//         if(i === Math.floor(index)){
//             return arr[i]
//         }
//     }
// }

// using  method

function valueAt(arr, index) {
  return arr[Math.floor(index)];
}
// console.log( valueAt([1, 2, 3, 4, 5, 6], 10 / 2) , 6);

// console.log( valueAt([1, 2, 3, 4, 5, 6], 8.0 / 2) , 5);

// console.log( valueAt([1, 2, 3, 4], 6.535355314 / 2) , 4);

// 13.
// Create a function that finds the index of a given item.

// Examples

// using loop

// function search(arr , val){
//     for(let i = 0 ; i < arr.length ; i++){
//         if(arr[i] === val){
//             return i
//         }
//     }
//     return -1
// }

// using method
function search(arr, val) {
  return arr.indexOf(val);
}
// console.log( search([1, 5, 3], 5) , 1);
// console.log( search([9, 8, 3], 3) , 2);
// console.log( search([9, 8, 3 , 14 , 20], 20) , 4);
// console.log( search([1, 2, 3], 4) , -1);

// 14.

// Fix the code in the code tab to pass this challenge (only syntax errors). Look at the examples below to get an idea of what the function should do.

// Examples
function sumArray(arr) {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
// console.log(sumArray([1, 2, 3, 4, 5]), 15);

// console.log(sumArray([-1, 0, 1]), 0);

// console.log(sumArray([0, 4, 8, 12]), 24);

// 15.
// Create a function that searches for the index of a given item in an array. If the item is present, it should return the index, otherwise, it should return -1.

// Examples
function search(arr , val){
    return arr.indexOf(val);
}
// console.log( search([1, 2, 3, 4], 3) , 2);

// console.log( search([2, 4, 6, 8, 10], 8) , 3);

// console.log( search([1, 3, 5, 7, 9], 11) , -1);

// 16.
// Write a function to check if an array contains a particular number.

// Examples

// function check(arr , val){
//     for(let i = 0 ; i < arr.length ; i++){
//         if(arr[i] === val){
//             return true
//         }
//     }
//     return false
// }

function check(arr , val){
    return arr.includes(val)
}
// console.log( check([1, 2, 3, 4, 5], 3) , true);

// console.log( check([1, 1, 2, 1, 1], 3) , false);

// console.log( check([5, 5, 5, 6], 5) , true);

// console.log( check([], 5) , false);


// 17
// Create a function that takes two numbers num1, num2, and an array arr and returns an array containing all the numbers in arr greater than num1 and less than num2.

// Examples

// function arrBetween(num1 , num2 , arr){
//     let result = []
//     for(let i = 0 ; i < arr.length ; i++){
//         if(arr[i] > num1 && arr[i] < num2){
//             result.push(arr[i])
//         }
//     }
//     return result
// }

function arrBetween(num1 , num2 , arr){
    return arr.filter((e)=> e > num1 && e < num2)
}
// console.log( arrBetween(3, 8, [1, 5, 95, 0, 4, 7]) , [5, 4, 7]);

// console.log( arrBetween(1, 10, [1, 10, 25, 8, 11, 6]) , [8, 6]);

// console.log( arrBetween(7, 32, [1, 2, 3, 78]) , []);

// 18.
// The 50-30-20 strategy is a simple way to budget, which involves spending 50% of after-tax income on needs, 30% after tax income on wants, and 20% after-tax income on savings or paying off debt.

// Given the after-tax income as ati, what you are supposed to do is to make a function that will return an object that shows how much a person needs to spend on needs, wants, and savings.

// Examples
function fiftyThirtyTwenty(amount){
    let result = {
        "Needs": amount/100 * 50, 
        "Wants": amount/100 * 30, 
        "Savings": amount/100 * 20
    }
    return result
}
// console.log( fiftyThirtyTwenty(10000) , { "Needs": 5000, "Wants": 3000, "Savings": 2000 });

// console.log( fiftyThirtyTwenty(50000) , { "Needs": 25000, "Wants": 15000, "Savings": 10000 });

// console.log( fiftyThirtyTwenty(13450) , { "Needs": 6725, "Wants": 4035, "Savings": 2690 });

// 19.
// Given two arrays, which represent two sandwiches, return whether both sandwiches use the same type of bread. The bread will always be found at the start and end of the array.

// Examples

// function hasSameBread(arr1 , arr2){
//     if(arr1[0] === arr2[0] && arr1[arr1.length -1] === arr2[arr2.length -1]){
//         return true
//     }
//     return false
// }

function hasSameBread(arr1, arr2) {
    const [bread1Start, ...bread1End] = arr1;
    const [bread2Start, ...bread2End] = arr2;
    
    return bread1Start === bread2Start && bread1End.pop() === bread2End.pop();
}
// console.log( hasSameBread(
//   ["white bread", "lettuce", "white bread"],
//   ["white bread", "tomato", "white bread"]
// ) , true);

// console.log( hasSameBread(
//   ["brown bread", "chicken", "brown bread"],
//   ["white bread", "chicken", "white bread"]
// ) , false);

// console.log( hasSameBread(
//   ["toast", "cheese", "toast"],
//   ["brown bread", "cheese", "toast"]
// ) , false);

// 20.
// Create a function that takes an array of integers and strings. Convert integers to strings and return the new array.

// Examples
// function parseArray(arr){
//     let result = [];
//     for(let i = 0 ; i < arr.length ; i++){
//         result.push(String(arr[i]))
//     }
//     return result
// }

function parseArray(arr){
    return arr.map((e)=> String(e))
}
// console.log( parseArray([1, 2, "a", "b"]) , ["1", "2", "a", "b"]);

// console.log( parseArray(["abc", 123, "def", 456]) , ["abc", "123", "def", "456"]);

// console.log( parseArray([1, 2, 3, 17, 24, 3, "a", "123b"]) , ["1", "2", "3", "17", "24", "3", "a", "123b"]);

// console.log( parseArray([]) , []);