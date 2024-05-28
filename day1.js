// 1.
// Create a function that takes an array containing only numbers and return the first element.

// Examples
// function getFirstValue(arr){
//     return arr[0];
// }

function getFirstValue(arr) {
  return arr.shift();
}
// console.log(getFirstValue([1, 2, 3]) , 1);

// console.log(getFirstValue([80, 5, 100]) , 80);

// console.log(getFirstValue([-500, 0, 50]) , -500);

// 2.
// Given two arguments, return an array which contains these two arguments.

// Examples
// function makePair(num1 , num2){
//     return [num1 , num2]
// }

// function makePair(a, b) {
//     return new Array(a, b);
// }

function makePair(a, b) {
  return Array.of(a, b);
}

// console.log( makePair(1, 2) , [1, 2]);

// console.log( makePair(51, 21) , [51, 21]);

// console.log( makePair(512124, 215) , [512124, 215]);

// 3
// According to the lodash documentation, _.drop creates a slice of an array with n elements dropped from the beginning.

// Your challenge is to write your own version using vanilla JavaScript.

// Examples
// function drop(arr , n){
//     return arr.slice(n);
// }

function drop(arr , n ){
    let result = [];
    for(let i = n ; i < arr.length ; i++){
        result.push(arr[i])
    }
    return result
}
// console.log(drop([1, 2, 3], 1), [2, 3]);

// console.log(drop([1, 2, 3], 2), [3]);

// console.log(drop([1, 2, 3], 5), []);

// console.log(drop([1, 2, 3], 0), [1, 2, 3]);

// 4.
// Given an object containing counts of both upvotes and downvotes, return what vote count should be displayed. This is calculated by subtracting the number of downvotes from upvotes.

// Examples
// function getVoteCount(obj) {
//     return obj.upvotes - obj.downvotes
// }

function getVoteCount({upvotes , downvotes}){
    return upvotes - downvotes;
}
// console.log( getVoteCount({ upvotes: 13, downvotes: 0 }) , 13);

// console.log( getVoteCount({ upvotes: 2, downvotes: 33 }) , -31);

// console.log( getVoteCount({ upvotes: 132, downvotes: 132 }) , 0);

// 5.

// Write a function to reverse an array.

// Examples
// function reverse(arr){
//     return arr.reverse();
// }

function reverse(arr){
    let result = [];
    for(let i = arr.length - 1; i >=0 ; i--){
        result.push(arr[i])
    }
    return result
}
console.log( reverse([1, 2, 3, 4]) , [4, 3, 2, 1]);

console.log( reverse([9, 9, 2, 3, 4]) , [4, 3, 2, 9, 9]);

console.log( reverse([]) , []);

