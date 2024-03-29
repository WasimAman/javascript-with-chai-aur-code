// ************ Object Destructure ***********

const user = {
    name : "Wasim",
    rollNo : "22TP1A05I3",
    courseName : "B.Tech"
}

console.log(user);

console.log(user.name); // There in no issue with this syntax
console.log(user["name"]); // There in no issue with this syntax as well

// Most of the people follows this approach

const {name} = user;    // This is known as object destructure
console.log(name);
// Now if i want to use user.name anywhere in our application then instead of writing user.name we can use name only even we can provide a dummy name of user.name variable like this

const{courseName:cName} = user;
console.log(cName);