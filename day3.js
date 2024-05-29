// 21.
// Create a function that takes an array and returns the types of values (data types) in a new array.

// Examples

// using for loop

// function arrayValuesTypes(arr){
//     let result = [];
//     for(let i = 0 ; i < arr.length ; i++){
//         result.push(typeof(arr[i]))
//     }
//     return result
// }

// using method

function arrayValuesTypes(arr) {
  return arr.map((e) => typeof e);
}
// console.log( arrayValuesTypes([1, 2, "null", []])
// , ["number", "number", "string", "object"]);

// console.log( arrayValuesTypes(["214", true, false, 2, 2.15, [], null])
// , ["string", "boolean", "boolean", "number", "number", "object", "object"]);

// console.log( arrayValuesTypes([21.1, "float", "array", ["I am array"], null, true, 214])
// , ["number", "string", "string", "object", "object", "boolean", "number"]);

// 22.

// There is an easy way to assign to array values to the nth index by using rest parameter syntax.
// use (...)
var [head, ...tail] = [1, 2, 3, 4];

// console.log(head) // outputs  1
// console.log(tail) // outputs 2
// But how could I make tail = [2, 3, 4] instead of tail = 2?

// 23.
// Create a function that takes as a parameter an array of "stringified" numbers and returns an array of numbers.

// Example:

// Examples
// function toNumberArray(arr){
//     return arr.map((e)=> Number(e))
// }

function toNumberArray(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(Number(arr[i]));
  }
  return result;
}
// console.log( toNumberArray(["9.4", "4.2"]) , [9.4, 4.2]);

// console.log( toNumberArray(["91", "44"]) , [91, 44]);

// console.log( toNumberArray(["9.5", "8.8"]) , [9.5, 8.8]);

// 24.

// Create a function that takes an array of two numbers and checks if the square root of the first number is equal to the cube root of the second number.

// Examples
function checkSquareAndCube(arr) {
  return Math.sqrt(arr[0]) === Math.cbrt(arr[1]);
}
// console.log( checkSquareAndCube([4, 8]) , true);

// console.log( checkSquareAndCube([16, 48]) , false);

// console.log( checkSquareAndCube([9, 27]) , true);

// 25.
// You call your spouse in anger and a "little" argument takes place. Count the total amount of insults used. Given an object of insults, return the total amount of insults used.

// Examples
function totalAmountAdjectives(obj) {
  // return Object.keys(obj).length;
  // return Object.values(obj).length;
  // return Object.entries(obj).length;
  let count = 0;
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      count++;
    }
  }
  return count;
}
// console.log( totalAmountAdjectives({ a: "moron" }) , 1);

// console.log( totalAmountAdjectives({ a: "idiot", b: "idiot", c: "idiot" }) , 3);

// console.log( totalAmountAdjectives({ a: "moron", b: "scumbag", c: "moron", d: "dirtbag" }) , 4);

// 26.

// You can assign variables from arrays with destructuring like this:

// const arr = ["eyes", "nose", "lips", "ears"]
// let [eyes, nose, lips, ears] = arr
// But you can also skip over items in the array being destructured.

// DO NOT change arr
// DO NOT USE var [lips] = arr[2]
// "eyes", "nose", and "ears" should not be assigned to anything

const arr = ["eyes", "nose", "lips", "ears"];
var [, , third] = arr;

// console.log(third); // Output: "lips"

// 27.
// Create a function which returns the length of a string, WITHOUT using String.length property.

// Examples
function length(str) {
  let result = 0;
  for (let chr of str) {
    result++;
  }
  return result;
}
// console.log( length("Hello World") , 11);

// console.log( length("Edabit") , 6);

// console.log( length("wash your hands!") , 16);

// 28.
// Create a function that takes a number and return an array of three numbers: half of the number, quarter of the number and an eighth of the number.

// Examples
function halfQuarterEighth(num) {
  return [num / 2, num / 4, num / 8];
}
// console.log( halfQuarterEighth(6) , [3, 1.5, 0.75]);

// console.log( halfQuarterEighth(22) , [11, 5.5, 2.75]);

// console.log( halfQuarterEighth(25) , [12.5, 6.25, 3.125]);

// 29.

// Create a function that takes a whole number as input and returns the shape with that number's amount of sides. Here are the expected outputs to get from these inputs.

// Inputs	Outputs
// 1	"circle"
// 2	"semi-circle"
// 3	"triangle"
// 4	"square"
// 5	"pentagon"
// 6	"hexagon"
// 7	"heptagon"
// 8	"octagon"
// 9	"nonagon"
// 10	"decagon"
// Examples

const shape = [
  "circle",
  "semi-circle",
  "triangle",
  "square",
  "pentagon",
  "hexagon",
  "heptagon",
  "octagon",
  "nonagon",
  "decagon",
];

function nSidedShape(num) {
  return shape[num - 1];
}
// console.log(nSidedShape(3), "triangle");

// console.log(nSidedShape(1), "circle");

// console.log(nSidedShape(9), "nonagon");

// 30.
// Create a function that takes an array with numbers and return an array with the elements multiplied by two.

// Examples
function getMultipliedArr(arr) {
  return arr.map((e) => e * 2);
}
// console.log( getMultipliedArr([2, 5, 3]) , [4, 10, 6]);

// console.log( getMultipliedArr([1, 86, -5]) , [2, 172, -10]);

// console.log( getMultipliedArr([5, 382, 0]) , [10, 764, 0]);

// 31.
// Create a function that takes an array of words and transforms it into an array of each word's length.

// Examples
// function wordLengths(arr){
//     return arr.map((e)=> e.length)
// }
function wordLengths(arr){
    let result = [];
    for(let i = 0 ; i < arr.length ; i++){
        result.push(arr[i].length)
    }
    return result
}
// console.log(wordLengths(["hello", "world"]), [5, 5]);

// console.log(
//   wordLengths(["Halloween", "Thanksgiving", "Christmas"]),
//   [9, 12, 9]
// );

// console.log(
//   wordLengths(["She", "sells", "seashells", "down", "by", "the", "seashore"]),
//   [3, 5, 9, 4, 2, 3, 8]
// );

// 32.

// Levers are simple machines with a rigid beam and a fulcrum. From the picture below, you can see that there are 3-types of levers: first class, second class and third class.

// In a first class lever, the fulcrum is situated in the middle with the effort and the load being positioned opposite of each other.
// In a second class lever, the fulcrum is situated in the right with the effort on the left and the load in the middle.
// In a third class lever, the fulcrum is situated in the left with the effort being in the middle and the load being on the right.


// Given an array that contains the fulcrum "f", the effort "e", and the load "l", write a function that determines whether or not the array shows a first class lever, second class lever, or a third class lever.

// Examples
function determineLever(arr){
    if(arr[0] === "e" && arr[1] === "f" && arr[2] === "l"){
        return "first class lever";
    } else if(arr[0] === "e" && arr[1] === "l" && arr[2] === "f"){
        return "second class lever";
    } else if(arr[0] === "f" && arr[1] === "e" && arr[2] === "l"){
        return "third class lever";
    } else{
        return "invalid input"
    }
}
// console.log( determineLever(["e", "f", "l"]) , "first class lever");

// console.log( determineLever(["e", "l", "f"]) , "second class lever");

// console.log( determineLever(["f", "e", "l"]) , "third class lever");
// Notes
// A pair of scissors is a first class lever, a nutcracker is a second class lever and a broom is a third class lever.

// 33.
// Create a function that takes a string and returns a string with spaces in between all of the characters.

// Examples
// function spaceMeOut(str){
//     let result = "";
//     for(let k in str){
//         result += str[k] + " "
//     }
//     return result
// }

// function spaceMeOut(str){
//     return str.split('').map(char => char + " ").join("").trim()
// }
console.log( spaceMeOut("space") , "s p a c e");

console.log( spaceMeOut("far out") , "f a r   o u t");

console.log( spaceMeOut("elongated musk") , "e l o n g a t e d   m u s k");

