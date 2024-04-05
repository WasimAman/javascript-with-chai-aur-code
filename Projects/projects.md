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