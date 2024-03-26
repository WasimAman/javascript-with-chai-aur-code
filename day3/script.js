// // in todays practice we will continue with strings.

// const name = "wasim";
// console.log(name);

// const countGitRepo = 50;
// // console.log(name+countGitRepo); //this is not a good practice.

// console.log(`This is concatenation of ${name} and ${countGitRepo} and result is ${name+countGitRepo}`); // good practice to use this syntax

// another way to declare a string in js

const name = new String("wasim");   // this is basically an object in js
// console.log(name);

// console.log(name[0]);   // here i'm not specifying index name[0] indicates that we are trying to access 0's key value

// console.log(name.__proto__);    // try it in browser console


const gameName = "          Temple Run          ";

// console.log(gameName.charAt(3));    // p
// console.log(gameName.indexOf('y')); // -1 because y is not present in Temple Run
// console.log(gameName.slice(0,6));   // this will print a string from 0th index to 6-1(5)th index

console.log(gameName.charCodeAt(4));    // it return ascii value of character present at specify index

console.log(gameName.trim());
console.log(gameName.split(" "));   // this will convert a string based on spaces
