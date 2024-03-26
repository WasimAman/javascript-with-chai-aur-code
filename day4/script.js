// numbers and Maths

// let num = 1000;
// console.log(num);   // this is normal number 

// // another way to declare a number in js
// let num1 = new Number(1000);    // this is object of number
// console.log(num1);

// console.log(num.toFixed(2)) // this method is used to get our specify no of digits after decimal in this case it will print 1000.00

// console.log(num.toLocaleString());  // this will print a number in this formate 1,000 since this is our readable formate

// console.log(num.toExponential(6));  // read documentation 

// *************** maths **************************
let number = 12233.3536;
console.log(Math.floor(number));    // this will return only digits before decimal  12233

console.log(Math.ceil(number));   // this will return digits before decimal +1 or we can say that this will round the decimal value 12234

console.log(Math.min(12,34,56,2,4,1,-1));   // this returns minimum value of an array 

console.log(Math.max(13,35,1333,45,76867,3425));    // this returns maximum value of an array


// most important method is random()

console.log(Math.random()); // this will generate a random value from in between 0 to 1

console.log(Math.random()*10);  // 0 to 10
console.log((Math.random()*10)+1);  // 1 to 10

