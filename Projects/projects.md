# project related to DOM

## projects links
[click here]()

# solution code

## project-1

## HTML code
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Color Changer</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div class="container">
      <div class="button-container">
        <h2>Choose a color to change the background</h2>
        <div class="buttons">
          <span class="button" id="gray"></span>
          <span class="button" id="pink"></span>
          <span class="button" id="black"></span>
          <span class="button" id="purple"></span>
          <span class="button" id="white"></span>
          <span class="button" id="green"></span>
          <span class="button" id="blue"></span>
          <span class="button" id="orange"></span>
          <span class="button" id="yellow"></span>
          <span class="button" id="aqua"></span>
          <span class="button" id="lightgray"></span>
          <span class="button" id="red"></span>
        </div>
      </div>
    </div>

    <script src="script.js"></script>
  </body>
</html>

```
## CSS code
``` css
* {
  font-family: "Roboto Mono", monospace;
  font-optical-sizing: auto;
  font-weight: 600;
  font-style: normal;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.container{
    width: 100vw;
    height: 100vh;
    background-color:#212121;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
}
.button-container{
    border: 1px solid whitesmoke;
    border-radius: 7px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background-color: #212121;
}
h2{
    color: white;
}
.buttons{
    display: grid;
    grid-template-columns: repeat(4,1fr);
    grid-template-rows: repeat(3,1fr);
    gap: 2rem;
    align-self: center;
}

.button{
    width: 7rem;
    height: 2.5rem;
    border-radius: 5px;
    border: none;
    font-size: 1.5rem;
    font-weight: 600;
}
.button:nth-child(1){
    background-color: gray;
}

.button:nth-child(2){
    background-color: pink;
}

.button:nth-child(3){
    background-color: black;
}

.button:nth-child(4){
    background-color: purple;
}
.button:nth-child(4){
    background-color: purple;
}
.button:nth-child(5){
    background-color: white;
}
.button:nth-child(6){
    background-color: green;
}

.button:nth-child(7){
    background-color: blue;
}
.button:nth-child(8){
    background-color: orange;
}
.button:nth-child(9){
    background-color: yellow;
}
.button:nth-child(10){
    background-color: aqua;
}
.button:nth-child(11){
    background-color: lightgray;
}
.button:nth-child(12){
    background-color: red;
}
```
## Javascript code
```javascript
const buttons = document.querySelectorAll(".button");
const body = document.querySelector(".container");
buttons.forEach((button) => {
  button.addEventListener("click", function (e) {
    const color = e.target.id; // Get the id of the clicked button
    body.style.backgroundColor = color;
  });
});

```

## project-2

## HTML code
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>BMI index</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div class="container">
      <h2>BMI Calculator</h2>
      <form id="bmi-form">
        <div class="first-field">
          <label>Weight:</label>
          <input id="weight" type="text" placeholder="Enter your weight in KG" />
        </div>
        <div class="second-field">
          <label>Height:</label>
          <input id="height" type="text" placeholder="Enter your height in CM" />
        </div>
        <button>Calculate</button>
      </form>
      <div class="result">
        <h2>Result</h2>
      <div class="box"></div>
      </div>
      <div class="guideline">
        <h2>BMI Weight Guide</h2>
        <p>under Weight = less than 18.6</p>
        <p>Normal Weight = 18.6-24.9</p>
        <p>Over Weight = Greater than 24.9</p>
      </div>
    </div>
    <script src="script.js"></script>
  </body>
</html>

```

# CSS code
```css
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

body{
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.container{
    width: 400px;
    height: 600px;
    background-color: #0f8f7a;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    gap: 1rem;
    border-radius: 10px;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    -ms-border-radius: 10px;
    -o-border-radius: 10px;
}

#bmi-form{
    width: 100%;
    height: 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
button{
    width: 5.5rem;
    height: 2rem;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    font-weight: 600;
    background-color: #03585d;
    color: whitesmoke;
    margin-left: 2rem;
    margin-top: .5rem;
}
.first-field,.second-field{
    width: 100%;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .5rem;
}
label{
    font-size: 1.2rem;
}
input{
    width: 60%;
    height: 2rem;
    border: none;
    border-radius: 4px;
    padding: 1rem;
    outline: none;
    font-size: 1rem;
}
button:hover{
    background-color: #04474b;
}
.box{
    width: 300px;
    height: 150px;
    border: 1px solid black;
    padding: .5rem;
}

.guideline{
    display: flex;
    gap: .5rem;
    flex-direction: column;
    font-size: 1.2rem;
}
```


# Javascript code
```javascript
const form = document.querySelector("form");

form.addEventListener('submit',function(e){
    e.preventDefault();
    const weight = parseInt(document.querySelector("#weight").value);
    const height = parseInt(document.querySelector("#height").value);
    const result = document.querySelector(".box");
    if(weight==0 || weight<0 || isNaN(weight)){
        result.innerHTML = "<h3>Please give a valid weight...</h3>";
    }else if(height==0 || height<0 || isNaN(height)){
        result.innerHTML = "<h3>Please give a valid height...</h3>";
    }else{
        const bmi = (weight/((height*height)/10000)).toFixed(2);
        if(bmi<18.6){
            result.innerHTML = `<h3>Your BMI index is ${bmi}<br>you are under weight</h3>`
        }else if(bmi>=18.6 && bmi<24.9){
            result.innerHTML = `<h3>Your BMI index is ${bmi}<br>you are Normal weight</h3>`
        }else{
            result.innerHTML = `<h3>Your BMI index is ${bmi}<br>you are Over weight</h3>`
        }
    }
})
```