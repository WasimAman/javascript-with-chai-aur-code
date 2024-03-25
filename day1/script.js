const accountId = 12335;
let accountHolder = "Wasim Ansari";
var accountPassword = "wasim$wasim";
bankName = "State Bank of India";

console.table([accountId,accountHolder,accountPassword,bankName]);

// window.alert("Hello"); we are using node not browser there is different syntax to use this alert;


// accountId = 6573;    we can't change the value of constant even we can't declare;
// const accountId = 6573; also we can't do this (This is known as reassignment);
accountHolder = "Aman"; // correct;
accountPassword = "wasu";   // correct;
bankName = "HDFC";  // correct;
console.table([accountId,accountHolder,accountPassword,bankName]);

/* 
    intro to datatypes in js;

    Number => 2 to the power 53;
    bigInt =>
    String => ""
    boolean => true/false
    null => this is a standalone value;
    undefined => we have declared the variable but did'nt initialize and if we log that variable this is will print undefined;
    symbol => to find uniqueness 

    object => simple key value pair

*/

console.log(typeof accountHolder);  // String
console.log(typeof null);   // object
console.log(typeof undefined);  //undefined
console.log(typeof "wasim");    //String
console.log(typeof 12); //number
console.log(typeof BigInt(12)); //bigInt
console.log(typeof {name:"wasim"}); //object
console.log(typeof true);   //boolean


// type conversion
// in Number
console.log("Number Conversion\n");
console.log(Number("12"));  //12 in number (int)
console.log(Number(null));  // 0
console.log(Number(undefined)); //NaN (not a number)
console.log(Number(true));  //1
console.log(Number(false)); //0
console.log(Number({name : "wasim"}));  // Nan (not a number)


// in String 
console.log("String conversion\n");
console.log(String(12));    //12
console.log(String(null));  //null
console.log(String(undefined)); //undefined
console.log(String(true));  //true 
console.log(String(false)); //false
console.log(String({name : "wasim"}));  //[object object]

console.log(typeof String(12)); //string
console.log(typeof String(null));   //string
console.log(typeof String(undefined));  //string
console.log(typeof String(true));   //string
console.log(typeof String(false));  //string
console.log(typeof String({name : "wasim"}));   //string

/*
    we can also convert boolean to number,string etc..

    imp:- we can convert from any data type to any data type.
*/