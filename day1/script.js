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

