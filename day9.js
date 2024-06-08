// 81.
// Write a function that searches an array of names (unsorted) for the name "Bob" and returns the location in the array. If Bob is not in the array, return -1.

// Examples
function findBob(arr){
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i] === "Bob"){
            return i
        }
    }
    return -1
}
// console.log( findBob(["Jimmy", "Layla", "Bob"]) , 2);

// console.log( findBob(["Bob", "Layla", "Kaitlyn", "Patricia"]) , 0);

// console.log( findBob(["Jimmy", "Layla", "James"]) , -1);

// 82.
// Create a function that takes an array of numbers. Return the largest number in the array.

// Examples
function findLargestNum(arr){
    // return Math.max(...arr)
    let maxNum = arr[0]
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i] > maxNum){
            maxNum = arr[i]
        }
    }
    return maxNum
}
console.log( findLargestNum([4, 5, 1, 3]) , 5);

console.log( findLargestNum([300, 200, 600, 150]) , 600);

console.log( findLargestNum([1000, 1001, 857, 1]) , 1001);