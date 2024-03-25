// operation

// basic operations
// console.log(9+2);   //simple addition
// console.log(9-2);   //simple subtraction
// console.log(9*2);   //simple multiplication
// console.log(9/2);   //simple division
// console.log(9%2);   // this gives reminder 
// console.log(9**2);  // this will give you 9 to the power 2

let value = 3;
let negValue = -value;

console.log(negValue);

let firstName = "wasim";
let secondName = "Ansari";

console.log(firstName+secondName);  //String concatenation

// Note:- String concatenation rule is same as java ans c language.


/*
    Memory(stack(Primitive) head(non-primitive);
*/  

let name = "wasim";
let anotherName = name;
anotherName = "Hy i'm trying to change the value of anotherName will it reflect on name variable let see";

console.log(name);  // wasim
console.log(anotherName);   //"Hy i'm trying to change the value of anotherName will it reflect on name variable let see";

/*
    because in primitive if i try to assign one variable value into another variable then reference won't be copy that variable will copy
*/


let user1 = {
    name : "Wasim",
    id : 12
}

let user2 = user1;

console.table([user1,user2]); // this will print wasim 12 for user1 and wasim 12 for user2

user2.id = 65;
console.table([user1,user2]);   // this will print wasim 65 for user1 and wasim 65 for user2

/*
    in above example we have tried to make changes in user2 but it reflected in user1 as well because in non primitive reference copies in another variable if i assign
*/ 
