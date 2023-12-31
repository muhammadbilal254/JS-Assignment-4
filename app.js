// Q1: Empty Multidimensional Array

var emptyMulti = [[], []];

// Q2: Fill MultiDimensional Array
var multi = [
  [0, 1, 2, 3],
  [1, 0, 1, 2],
  [2, 1, 0, 1],
];

// Q3: print count 1 to 10
// document.write("<h1>Count</h1>");
// for (let count = 1; count <= 10; count++) {
//   document.write(count);
//   console.log(count);
// }

// Q4: Multiplication Table
// var table = +prompt("Enter table Number:", "5");
// var length = +prompt("Enter length of table:", "10");

// document.write("<h1>Multiplication Table of " + table + "</h1>");
// for (let i = 1; i <= length; i++) {
//   document.write(table + " X " + i + " = " + table * i);
//   document.write("<br>");
// }

// Q5: print fruits
// var fruits = ["apple", "banana", "mango", "orange"];
// for (e in fruits) {
//   console.log(fruits[e]);
// }

// Q6: print series
// counting

// for (let i = 1; i <= 15; i++) {
//   console.log(i);
// }

// Reverse
// for (let i = 10; i > 0; i--) {
//   console.log(i);
// }

// Even
// for (let i = 0; i <= 20; i++) {
//   if (i % 2 == 0) console.log(i);
// }

// Odd
// for (let i = 0; i <= 20; i++) {
//   if (!(i % 2 == 0)) console.log(i);
// }

// series
// for (let i = 2; i <= 20; i += 2) {
//   console.log(i + "k");
// }

// Q7:
// var products = ["cake", "apple pie", "cookie", "chips", "patties"];
// var search = prompt("Enter your product");
// var isFound = false;

// for (let i = 0; i < products.length; i++) {
//   if (products[i] === search) {
//     isFound = true;
//     break;
//   }
// }

// if (isFound === true) {
//   console.log(search + " is available in our bakery");
// } else {
//   console.log("we are sorry." + search + " is not availabe in our bakery");
// }

// // Q8: Largest element in array
// let numArr = [24, 53, 78, 91, 12];
// var max = numArr[0];

// for (let i = 0; i < numArr.length; i++) {
//   if (numArr[i] > max) {
//     max = numArr[i];
//   }
// }

// console.log("The Largest Element is: ", max);

// Q9: Smallest element in array
// let numArr = [24, 53, 78, 91, 12];
// var min = numArr[0];

// for (let i = 0; i < numArr.length; i++) {
//   if (numArr[i] < min) {
//     min = numArr[i];
//   }
// }

// console.log("The Smallest Element is: ", min);

// Q 10: multiple of 5 between 1 to 100

for (var i = 1; i <= 100; i++) {
  if (i % 5 == 0) {
    console.log(i);
  }
}
