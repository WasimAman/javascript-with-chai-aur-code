// // ************** More About Objects ***********

// const obj = new Object();   // This is singleton object
// console.log(obj);

// const obj1 = {};    // This is not a singleton object
// console.log(obj1);

// // That's the only difference between both syntax

const obj1 = {
    name1 : "Wasim",
    rollNo1 : "22TP1A05I3",
    course1 : "B.Tech",
    college1 : "Siddhartha Institute Of Engineering And Techonoly,Hyderabad"
}

const obj2 = {
    name2 : "Bashir",
    rollNo2 : "22TP1A0570",
    course2 : "B.Tech",
    college2 : "Siddhartha Institute Of Engineering And Techonoly,Hyderabad"
}
const obj3 = {
    name4 : "Aman",
    rollNo4 : "22TP1A0557",
    course4 : "B.Tech",
    college4 : "Siddhartha Institute Of Engineering And Techonoly,Hyderabad"
}

// const obj4 = Object.assign(obj1,obj2,obj3);
// console.log(obj4);

// const obj4 = Object.assign({},obj1,obj2,obj3);
// console.log(obj4);

// const obj4 = {...obj1,...obj2,...obj3};
// console.log(obj4);

// All are same


console.log(Object.keys(obj1));
console.log(Object.values(obj1));