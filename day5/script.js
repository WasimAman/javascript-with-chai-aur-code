// ************** date **************

let date = new Date();
console.log(date);  // this will print some wired things in date

console.log(date.getTime());    // this will return time in mili second
console.log((date.getFullYear()));  // returns years
console.log((date.getMonth()));  // returns month in 0 base indexing means jan-0, feb-1, mar-2 like this
console.log(date.getMonth()+1); // return month in 1 indexing
console.log(date.setFullYear(3000));
console.log((date.toLocaleDateString()));  // returns date months and years in our understandable formate
console.log((date.toLocaleTimeString()));  // returns times in our understandable formate


// important point try read documentation of date module

