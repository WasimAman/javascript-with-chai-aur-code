const promiseOne = new Promise(function(resolve,reject){
    // We can do all async task here

    setTimeout(function(){
        console.log("Async task is completed");
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("Promises is consumed");
})

new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Another way to do async task");
        resolve();  // to connect promises with then method
    }, 1000);
}).then(()=>{
    console.log("Another way to consumed promises");
})

const promiseThree = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve({username:"Wasim",password:"wasim$wasim"});
    },1000)
})

promiseThree.then((user)=>{
    console.log(user);
})

const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "Wasim", email: "wasim@Example.com" });
    } else {
      reject("ERROR:something went wrong");
    }
  }, 1000);
});

promiseFour.then((user) => {
  console.log(user);
  return user.username;
}).then((username)=>{
    console.log(username);
}).catch((error)=>{
    console.log(error);
});