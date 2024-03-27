// const arr = [1,2,3,4,5,6,7];
// console.table(arr);

// let len = arr.push(9);  // push adds new element in array and returns the new length.
// console.log(`Length of arr is ${len}`);
// console.table(arr);

// // arr.forEach(val=>{
// //     console.log(val)
// // })

// let arr2 = arr.concat([1,3,5,6]);   // this concatenates the array and returns new array
// console.log(arr);  // this is original array
// console.log(arr2);  // new array 

// arr.shift();
// arr.unshift(12);
// const evenArr = arr.filter(value=>{
//     return arr%2==0;
// })

// console.log(evenArr);


// ********************* part 2 ******************

// let hero = ["thor","ironMan","captain","hulk"];

// hero = hero.concat(["superMan","flash","batMan","aquaMan"]);
// console.table(hero);

// const arr1 = [1,2,3,4,5];
// const arr2 = [6,7,8,9,12,34];
// const arr3 = [23,4,123,45,67];
// const arr4 = [...arr1,...arr2,...arr3]; // ... is spread operator it means this operator splits the array by , and concatenating in arr4
// console.table(arr4);

// const arr5 = [1,2,3,4,[5,3,3,5,6],6,7,[34,554,23,56,[24,56,769,96]]];
// const newArr = arr5.flat(Infinity); // this return 1D array
// console.table(newArr);

// const slicedArr = newArr.slice(2,8);    // this method is taking element from 2nd index of newArr to 8-1(7)th index of newArr and assigning to the slicedArr but this will not effect newArr
// console.table(slicedArr);
// console.table(newArr);

// const splicedArr = newArr.splice(2,8);  // this is also doing same thing as slice method but this method will change the array
// console.table(splicedArr);
// console.table(newArr);


// **************** new concept ***************

const name = "wasim";
console.log(Array.isArray(name));   // false because it is a String.
console.table(Array.from(name));    // this will convert name into an array with each Character

const name1 = "wasim";
const name2 = "ansari";
const name3 = "aman";

// console.table(Array.from(name1,name2,name3));   // error
console.table(Array.of(name1,name2,name3)); // this will make an array with name1,name2,name3