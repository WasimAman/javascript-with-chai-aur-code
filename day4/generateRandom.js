// this program if to generate random number in given range

const randomNumber = (min,max)=>{
    return Math.floor(Math.random()*(max-min+1)+min);
}


console.log(randomNumber(12,16));
console.log(randomNumber(0,3));
console.log(randomNumber(-12,16));
console.log(randomNumber(-12,12));
