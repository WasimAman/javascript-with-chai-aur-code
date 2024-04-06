const userInput = document.querySelector("#userInput");
const submit = document.querySelector("#submit-btn");
const previousGuess = document.querySelector("#Previous-guesses");
const remaining = document.querySelector("#Remaining");
const msg = document.querySelector("#msg");
const startOver = document.querySelector(".results");
const startBtn = document.querySelector(".start-btn");

// Actual code
const getRandomNumber = ()=>{
    return parseInt(Math.random()*100+1);
}
let randomNumber = getRandomNumber();
console.log(randomNumber);
let preGuesses = [];
let noOfGuesses = 10;
let playGame = true;
let button = document.createElement("button");
if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess)
    })
}
const validateGuess = (guess)=>{
    // number validation code
    if(isNaN(guess)){
        alert("Please Enter a valid number!");
    }else if(guess<=0){
        alert("Please Enter number greater than 0");
    }else if(guess>100){
        alert("Please Enter number less than 100");
    }else{
        preGuesses.push(guess);
        if(noOfGuesses==1){
            displayGuess(guess);
            displayMassage(`Game Over. Random number was ${randomNumber}`);
            endGame();
        }else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}
const checkGuess = (guess)=>{
    // code for checking whether number is guessed or not
    if(guess==randomNumber){
        displayMassage(`You Guessed the number<br>Guessed number is ${randomNumber}`);
        endGame();
    }else if(guess>randomNumber){
        displayMassage("Number is TOOO High");
    }else{
        displayMassage("Number is TOOO Low");
    }
}

const displayMassage = (massage)=>{
    msg.innerHTML = `${massage}`;
}

const displayGuess = (guess)=>{
    // code to display the numbers and massage
    userInput.value = '';
    previousGuess.innerHTML += `${guess},`;
    --noOfGuesses;
    remaining.innerHTML = `${noOfGuesses}`;
}

const endGame = ()=>{
    userInput.value = '';
    userInput.setAttribute('disabled','');
    button.innerHTML = "Start Again";
    button.style.width = "10rem";
    button.style.height = "2.2rem";
    button.style.textAlign = "center";
    button.style.fontSize = "1.2rem"; 
    button.style.border = "none";
    button.style.borderRadius = "4px";
    button.id = "startNewGame";
    playGame = false;
    startBtn.appendChild(button);
    newGame();
}

const newGame = ()=>{
    const startNewGame = document.querySelector("#startNewGame");
    startNewGame.addEventListener('click',function(e){
        noOfGuesses = 10;
        preGuesses = [];
        previousGuess.innerHTML = '';
        remaining.innerHTML = noOfGuesses;
        msg.innerHTML = '';
        playGame = true
        userInput.removeAttribute('disabled');
        randomNumber = getRandomNumber();
        startBtn.removeChild(startNewGame);
        userInput.removeAttribute('disabled');
    })
}