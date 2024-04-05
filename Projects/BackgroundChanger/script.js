const buttons = document.querySelectorAll(".button");
const body = document.querySelector(".container");
buttons.forEach((button) => {
  button.addEventListener("click", function (e) {
    const color = e.target.id; // Get the id of the clicked button
    body.style.backgroundColor = color;
  });
});
