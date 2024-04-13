// This is callback hell.

// function getData(data,getNextData){
//     new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log(data);
//             if(getNextData){
//                 getNextData();
//             }
//         },3000)
//     })
// }

// console.log("getting data1");
// getData("data1",()=>{
//     console.log("getting data2");
//     getData("data2",()=>{
//         console.log("getting data3");
//         getData("data3",()=>{
//             console.log("getting data4");
//             getData("data4",()=>{
//                 console.log("getting data5");
//                 getData("data5")
//             })
//         })
//     })
// })

// Promise chaining.

// function getData(data){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log(data);
//             resolve(data+" received");
//         },3000)
//     })
// }

// getData("data1").then((res)=>{
//     console.log(res);
//     return getData("data2")
// }).then((res)=>{
//     console.log(res);
//     return getData("data3");
// }).then((res)=>{
//     console.log(res);
//     return getData("data4");
// }).then((res)=>{
//     console.log(res);
//     return getData("data5")
// }).then((res)=>{
//     console.log(res);
// })



// Async and wait

function getData(data){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(data);
            resolve("success");
        },3000)
    });
}

// async function getAllData(){
//     console.log("Getting data 1...");
//     await getData("data1");
//     console.log("Getting data 2...");
//     await getData("data2");
//     console.log("Getting data 3...");
//     await getData("data3");
//     console.log("Getting data 4...");
//     await getData("data4");
//     console.log("Getting data 5...");
//     await getData("data5");
//     console.log("Getting data 6...");
//     await getData("data6");
//     console.log("Getting data 7...");
//     await getData("data7");
//     console.log("Getting data 8...");
//     await getData("data8");
// }

// getAllData();   // This is unnesecery call to avoid this thing we can use IIFE function(Immediatly invoked function expression)


// IIFE Function 
(async function getAllData(){
    console.log("Getting data 1...");
    await getData("data1");
    console.log("Getting data 2...");
    await getData("data2");
    console.log("Getting data 3...");
    await getData("data3");
    console.log("Getting data 4...");
    await getData("data4");
    console.log("Getting data 5...");
    await getData("data5");
    console.log("Getting data 6...");
    await getData("data6");
    console.log("Getting data 7...");
    await getData("data7");
    console.log("Getting data 8...");
    await getData("data8");
})();

/*
    This is one time used function we can't reuse again.
*/