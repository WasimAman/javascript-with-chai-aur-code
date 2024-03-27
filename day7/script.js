// **************** objects *************

// const user = {
//     name : "wasim",
//     rollNo : 123,
//     "branch" : "CSE",
//     email : "wasimaman65@gamil.com",
//     isLogIn : false,
//     lastDayLogin : ["monday","tuesday","friday"]
// }

// console.table(user);

// //first way to print objects.
// console.log(user.name);
// console.log(user.rollNo);
// console.log(user.email);
// console.log(user.isLogIn);
// console.log(user.lastDayLogin);
// console.log(user.branch)


// //second way to print objects.
// console.log(user["name"]); 
// console.log(user["rollNo"]); 
// console.log(user["email"]); 
// console.log(user["isLogIn"]); 
// console.log(user["lastDayLogin"]); 
// console.log(user["branch"]);

// how to add symbol in Objects
const mySym = Symbol("mySymbol");
const user = {
    name : "wasim",
    rollNo : 123,
    "branch" : "CSE",
    email : "wasimaman65@gamil.com",
    isLogIn : false,
    lastDayLogin : ["monday","tuesday","friday"],
    [mySym] : "symbol"
}

console.log(user);


// ********************* important ***************************
// if we don't want user to change value of key then we can freeze that key
user.name = "Hello";    // this will change because name is not freezed yet
console.log(user);
Object.freeze(user.name)    // now i have freezed the name key now no one can change the value of name
console.log(user);
user.name = "Kya hall hai";

// Object.freeze(user) // No one can make changes in user object.


