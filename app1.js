// 21 to 25
// String Operations

// Q1:
// var fname = prompt("Enter First name: ");
// var lname = prompt("Enter last name: ");
// var fullName = fname + " " + lname;
// alert("welcome " + fullName);

// Q2:
// var mobileModel = prompt("Enter Your Favorite Mobile Phone Model: ");
// alert(
//   "Favourite Phone is: " +
//     mobileModel +
//     "\nLenght of String is " +
//     mobileModel.length
// );

// Q3:
// var word = "Pakistani";
// alert("String is " + word + " index of 'n' is " + word.indexOf("n"));

// Q4:
// var word = "Hello World";
// alert("String is " + word + " index of 'n' is " + word.lastIndexOf("l"));

// Q5:
// var word = "Pakistani";
// document.write("Character at index 3 is: " + word.charAt(3));

// Q6:
// var fname = prompt("Enter First name: ");
// var lname = prompt("Enter last name: ");
// var fullName = fname.concat(" ").concat(lname);
// alert("welcome " + fullName);

// Q7:
// var word = "Hyderabad";
// var newWord = word.replace("Hyder", "Islam");
// document.write("City " + word);
// document.write("New City " + newWord);

//Q8:
// var message =
//   "Ali and Sami are best friends. They play cricket and football together.";
// var newMsg = message.replace(/and/g, "&");
// console.log(newMsg);

// Q9:
// var num = "472";
// console.log("String " + num + " type " + typeof num);
// // Number.parseInt(num)
// console.log("String " + num + " type " + typeof Number.parseInt(num));

// Q10:
var inp = prompt("Enter something");
alert(inp.toUpperCase());
