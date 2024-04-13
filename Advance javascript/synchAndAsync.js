// synchronous programming
/*
    it means code runs in a particular sequence of instruction given in the program each instruction waits for the previous instruction to complete its execution.
*/

// Asynchronous programming
/*
    Due to synchronous programming, sometimes important instructions get blocked due to some previous instruction which causes a delay in the UI Asynchronous code execution allows  to execute next instruction immediately and doesn't block the flow of execution. 
*/

// Callback

/*
callback basically is a function which is passed in another function as an argument
*/

// function sum(a, b) {
//   console.log(a + b);
// }
// function calculator(a, b, sumCallback) {
//   // sumCallback(a,b);
//   console.log(sumCallback);
// }

// calculator(1, 3, sum);

// callback hell
/*
    nesting of callback is known as callback hell
*/

// function getData(data, getNextData) {
//   setTimeout(() => {
//     console.log("Data ", data);
//     if (getNextData) {
//       getNextData();
//     }
//   }, 3000);
// }

// This is callback hell we do this thing while fetching data from database 
// console.log("Getting date 1...");
// getData(1, () => {
//   console.log("Getting date 2...");
//   getData(2, () => {
//     console.log("Getting date 3...");
//     getData(3, () => {
//       console.log("Getting date 4...");
//       getData(4, () => {
//         console.log("Getting date 5...");
//         getData(5);
//       });
//     });
//   });
// });

/*
    callback hell is very difficult to understand manage that's why to solve this problem promises concept came in javascript


    we will use callback but as soon as it becomes callback hell try to improve it
*/

// Promises

/*
    promise if for eventual completion of task it is an object in javascript and it also a solution of callback hell

    basically API returns a promises and we performs some operation on that promise 

    if promise resolves then promise.then() executes
    inside then method we write those method that will execute after promise is resolved

    if promise rejects then promise.catch() executes
    inside catch method we write those methods that will execute after promise is rejected.

    how to create promises:- check promises repo
*/

// solving callback hell problem with the help of promises


const fetchData = (data)=>{
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      console.log(data);
      resolve("success");
    },5000)
  })
}

// console.log("Fetching data1");
// fetchData("data1").then((res)=>{
//   console.log(res);
//   console.log("Fetching data2");
//   fetchData("data2").then((res)=>{
//     console.log(res);
//   })
// })

fetchData("data1")
.then((res)=>{
  return fetchData("data2")
})
.then((res)=>{
  return fetchData("data3")
}).then((res)=>{
  return fetchData("data4")
}).then();